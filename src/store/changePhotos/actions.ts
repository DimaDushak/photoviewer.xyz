import {
    ADD_PHOTOS,
    TO_LIKE_PHOTO,
    DELETE_PHOTOS,
    IAddPhotosAction,
    IToLikePhotoAction,
    IDeletePhotosAction
} from './types';

export const addPhotos = (photosArray: any, pageNumber: number): IAddPhotosAction => ({
    type: ADD_PHOTOS,
    photosArray,
    pageNumber
});

export const toLikePhoto = (photo: any, addedLike: number): IToLikePhotoAction => ({
    type: TO_LIKE_PHOTO,
    photo,
    addedLike
});

export const deletePhotos = (): IDeletePhotosAction => ({
    type: DELETE_PHOTOS
});
