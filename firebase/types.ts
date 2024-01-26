export interface SendEmailProps {
    email: string;
    subject: string;
    message: string;
    tel: string;
    name: string;
}

export enum LoadStates {
    NOT_LOADED = 0,
    LOADING,
    LOADED,
    ERROR,
}
