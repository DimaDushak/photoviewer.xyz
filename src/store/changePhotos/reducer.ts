import {
    ADD_PHOTOS,
    TO_LIKE_PHOTO,
    DELETE_PHOTOS,
    IChangePhotosActions
} from './types';

interface IState {
    photosArray: any;
    pageNumber: number;
    totalLikes: number;
}

const initialState: IState = {
    photosArray: [],
    pageNumber: 1,
    totalLikes: 0
};

export const changePhotos = (state = initialState, action: IChangePhotosActions) => {
    switch(action.type) {
        case ADD_PHOTOS:
            return {
                ...state,
                photosArray: state.photosArray.concat(action.photosArray),
                pageNumber: ++action.pageNumber
            };

        case TO_LIKE_PHOTO:
            return {
                ...state,
                photosArray: state.photosArray.map((item: any) => {
                    return (item.id == action.photo.id)
                        ? {
                            ...item,
                            likes: action.photo.likes,
                            liked_by_user: action.photo.liked_by_user
                        }
                        : item;
                }),
                totalLikes: state.totalLikes + action.addedLike
            };

        case DELETE_PHOTOS:
            return {
                ...state,
                photosArray: [],
                pageNumber: 1
            };

        default:
            return state;
    }
};
