import { RESIZE_WINDOW, IResizeWindowAction } from './types';

export const resizeWindow = (isTablet: boolean, isDesktop: boolean): IResizeWindowAction => ({
    type: RESIZE_WINDOW,
    isTablet,
    isDesktop
});
