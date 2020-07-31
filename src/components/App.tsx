import React from 'react';
import { toJson } from 'unsplash-js';
import { Route, Redirect, Switch } from 'react-router-dom';
import { unsplash, authenticationUrl } from '../unsplash';
import PhotoGridContainer from '../containers/PhotoGridContainer';
import FullPhotoViewerContainer from '../containers/FullPhotoViewerContainer';
import LikedContentContainer from '../containers/LikedContentContainer';
import { Header } from './Header';
import { Main } from './Main';
import { ContentByKeyword } from './Main/ContentByKeyword';
import { Text, EColors } from './Text';
import { maxMobileWidth, maxTabletWidth } from '../store/resizeWindow/reducer';
import './main.global.css'; 

interface IAppProps {
    addPhotos: (json: object[], pageNumber: number) => void;
    toLikePhoto: (obj: object, addedLike: number) => void;
    resizeWindow: (isTablet: boolean, isDesktop: boolean) => void;
    deletePhotos: () => void;
}

export function App(props: IAppProps) {
    const { addPhotos, toLikePhoto, resizeWindow, deletePhotos } = props;
    const [ userName, setUserName ] = React.useState('');
    const loadPhotosCount = 12;
    const code = location.search.split('code=')[1];

    const loadPhotos = (pageNumber: number) => {
        unsplash.photos.listPhotos(pageNumber, loadPhotosCount)
            .then(toJson)
            .then((json) => {
                addPhotos(json, pageNumber);
            });
    };

    const start = () => {
        unsplash.auth.userAuthentication(code) 
            .then(toJson)
            .then(json => {
                unsplash.auth.setBearerToken(json.access_token);
                unsplash.currentUser.profile()
                    .then(toJson)
                    .then(json => {
                        toLikePhoto({}, json.total_likes);
                        setUserName(json.username);
                    });
            });
    };

    React.useEffect(() => {
        code ? start() : location.assign(authenticationUrl);

        window.addEventListener('resize', () => {
            const width = window.innerWidth;
            resizeWindow(width > maxMobileWidth, width > maxTabletWidth);
        });
    }, []);

    if (userName) {
        return (
            <>
                <Header deletePhotos={deletePhotos} />
                <Main>
                    <Switch>
                        <Route path="/main">
                            <PhotoGridContainer loadPhotos={loadPhotos} />
                            <Route path={`/main/popup/:id`}>
                                <FullPhotoViewerContainer
                                    loadPhotos={loadPhotos}
                                />
                            </Route>
                        </Route>
                        <Route path="/search/:keyword">
                            <ContentByKeyword
                                loadPhotosCount={loadPhotosCount}
                                addPhotos={addPhotos}
                            />
                        </Route>
                        <Route path="/likes">
                            <LikedContentContainer
                                userName={userName}
                                loadPhotosCount={loadPhotosCount}
                            />
                        </Route>
                        <Redirect from="/" to="/main" />
                    </Switch>
                </Main>
            </>
        );
    } else {
        return <Text
                    As="div"
                    size={24}
                    className="flex"
                    color={EColors.black}
                >
                    Loading
                </Text>;
    }
}
