export const ADD_PHOTOS = 'ADD_PHOTOS';
export const TO_LIKE_PHOTO = 'TO_LIKE_PHOTO';
export const DELETE_PHOTOS = 'DELETE_PHOTOS';

export interface IAddPhotosAction {
    type: typeof ADD_PHOTOS;
    photosArray: any;
    pageNumber: number;
}

export interface IToLikePhotoAction {
    type: typeof TO_LIKE_PHOTO;
    photo: any;
    addedLike: number;
}

export interface IDeletePhotosAction {
    type: typeof DELETE_PHOTOS;
}

export type IChangePhotosActions = IAddPhotosAction | IToLikePhotoAction | IDeletePhotosAction;
