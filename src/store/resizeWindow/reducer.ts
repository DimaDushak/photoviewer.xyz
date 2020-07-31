import { RESIZE_WINDOW, IResizeWindowAction } from './types';

export const maxMobileWidth = 767;
export const maxTabletWidth = 991;
const width = window.innerWidth;

interface IState {
    isTablet: boolean;
    isDesktop: boolean;
}

const initialState: IState = {
    isTablet: width > maxMobileWidth,
    isDesktop: width > maxTabletWidth
};

export const resizeWindow = (state = initialState, action: IResizeWindowAction) => {
    switch(action.type) {
        case RESIZE_WINDOW:
            return {
                ...state,
                isTablet: action.isTablet,
                isDesktop: action.isDesktop
            };

        default:
            return state;
    }
};
