import { combineReducers } from 'redux';
import { changePhotos } from './changePhotos/reducer';
import { resizeWindow } from './resizeWindow/reducer';
import { loadingByScroll } from './loadingByScroll/reducer';
import { showingPhotoInform } from './showingPhotoInform/reducer';

export const rootReducer = combineReducers({
    changePhotos,
    resizeWindow,
    loadingByScroll,
    showingPhotoInform
});

export type RootState = ReturnType<typeof rootReducer>;
