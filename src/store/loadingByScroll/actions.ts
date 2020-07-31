import {
    DISABLE_LOADING_BY_SCROLL,
    ENABLE_LOADING_BY_SCROLL,
    IDisableLoadingByScrollAction,
    IEnableLoadingByScrollAction
} from './types';

export const disableLoadingByScroll = (scrollPositionY: number): IDisableLoadingByScrollAction => ({
    type: DISABLE_LOADING_BY_SCROLL,
    scrollPositionY
});

export const enableLoadingByScroll = (): IEnableLoadingByScrollAction => ({
    type: ENABLE_LOADING_BY_SCROLL
});
