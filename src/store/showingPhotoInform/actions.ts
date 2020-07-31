import {
    SHOW_INFORM,
    HIDE_INFORM,
    IShowInformAction,
    IHideInformAction
} from './types';

export const showInform = (id: string): IShowInformAction => ({
    type: SHOW_INFORM,
    id
});

export const hideInform = (): IHideInformAction => ({
    type: HIDE_INFORM
});
