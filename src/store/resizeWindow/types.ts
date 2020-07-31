export const RESIZE_WINDOW = 'RESIZE_WINDOW';

export interface IResizeWindowAction {
    type: typeof RESIZE_WINDOW;
    isTablet: boolean;
    isDesktop: boolean;
}
