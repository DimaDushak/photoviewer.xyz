import React from 'react';
import { toJson } from 'unsplash-js';
import { Route, useParams, useRouteMatch } from 'react-router-dom';
import { unsplash } from '../../../unsplash';
import PhotoGridContainer from '../../../containers/PhotoGridContainer';
import FullPhotoViewerContainer from '../../../containers/FullPhotoViewerContainer';

interface IContentByKeywordProps {
    loadPhotosCount: number;
    addPhotos: (photosArray: object[], pageNumber: number) => void;
}

export function ContentByKeyword({ loadPhotosCount, addPhotos }: IContentByKeywordProps) {
    const [ totalPhotosByKeyword, setTotalPhotosByKeyword ] = React.useState(-1);
    const { url } = useRouteMatch();
    const { keyword } = useParams();

    const loadPhotosByKeyword = (pageNumber: number) => {
        unsplash.search.photos(keyword, pageNumber, loadPhotosCount)
            .then(toJson)
            .then(json => {
                addPhotos(json.results, pageNumber);
            });
    };

    React.useEffect(() => {
        unsplash.search.photos(keyword)
            .then(toJson)
            .then(json => {
                setTotalPhotosByKeyword(json.total);
            });
    }, []);

    return (
        <>
            <PhotoGridContainer
                loadPhotos={loadPhotosByKeyword}
                totalPhotos={totalPhotosByKeyword}
                keyword={keyword}
            />
            <Route path={`${url}/popup/:id`}>
                <FullPhotoViewerContainer
                    loadPhotos={loadPhotosByKeyword}
                    totalPhotos={totalPhotosByKeyword}
                />
            </Route>
        </>
    );
}
