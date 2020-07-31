import {
    DISABLE_LOADING_BY_SCROLL,
    ENABLE_LOADING_BY_SCROLL,
    ILoadingByScrollActions
} from './types';

interface IState {
    isEnableLoadingByScroll: boolean;
    scrollPositionY: number;
}

const initialState: IState = {
    isEnableLoadingByScroll: true,
    scrollPositionY: 0
};

export const loadingByScroll = (state = initialState, action: ILoadingByScrollActions) => {
    switch(action.type) {
        case DISABLE_LOADING_BY_SCROLL:
            return {
                ...state,
                isEnableLoadingByScroll: false,
                scrollPositionY: action.scrollPositionY
            };

        case ENABLE_LOADING_BY_SCROLL:
            return {
                ...state,
                isEnableLoadingByScroll: true
            };

        default:
            return state;
    }
};
