import {
    SHOW_INFORM,
    HIDE_INFORM,
    IShowingInformActions
} from './types';

export const showingPhotoInform = (state = '', action: IShowingInformActions) => {
    switch(action.type) {
        case SHOW_INFORM:
            return action.id;

        case HIDE_INFORM:
            return '';

        default:
            return state;
    }
};
