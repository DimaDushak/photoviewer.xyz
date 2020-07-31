import React from 'react';
import { toJson } from 'unsplash-js';
import { Route, useRouteMatch } from 'react-router-dom';
import { unsplash } from '../../../unsplash';
import PhotoGridContainer from '../../../containers/PhotoGridContainer';
import FullPhotoViewerContainer from '../../../containers/FullPhotoViewerContainer';

interface ILikesContentProps {
    totalLikes: number;
    userName: string;
    loadPhotosCount: number;
    addPhotos: (photosArray: object[], pageNumber: number) => void;
}

export function LikedContent(props: ILikesContentProps) {
    const { totalLikes, userName, loadPhotosCount, addPhotos } = props;
    const { url } = useRouteMatch();

    const loadLikedPhotos = (pageNumber: number) => {
        unsplash.users.likes(userName, pageNumber, loadPhotosCount)
            .then(toJson)
            .then(json => {
                addPhotos(json, pageNumber);
            });
    };

    return (
        <>
            <PhotoGridContainer
                loadPhotos={loadLikedPhotos}
                totalPhotos={totalLikes}
            />
            <Route path={`${url}/popup/:id`}>
                <FullPhotoViewerContainer
                    loadPhotos={loadLikedPhotos}
                    totalPhotos={totalLikes}
                />
            </Route>
        </>
    );
}
