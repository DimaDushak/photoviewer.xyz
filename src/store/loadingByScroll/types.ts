export const DISABLE_LOADING_BY_SCROLL = 'DISABLE_LOADING_BY_SCROLL';
export const ENABLE_LOADING_BY_SCROLL = 'ENABLE_LOADING_BY_SCROLL';

export interface IDisableLoadingByScrollAction {
    type: typeof DISABLE_LOADING_BY_SCROLL;
    scrollPositionY: number;
}

export interface IEnableLoadingByScrollAction {
    type: typeof ENABLE_LOADING_BY_SCROLL;
}

export type ILoadingByScrollActions = IDisableLoadingByScrollAction | IEnableLoadingByScrollAction;
