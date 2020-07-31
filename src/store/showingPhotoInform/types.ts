export const SHOW_INFORM = 'SHOW_INFORM';
export const HIDE_INFORM = 'HIDE_INFORM';

export interface IShowInformAction {
    type: typeof SHOW_INFORM;
    id: string;
}

export interface IHideInformAction {
    type: typeof HIDE_INFORM;
}

export type IShowingInformActions = IShowInformAction | IHideInformAction;
