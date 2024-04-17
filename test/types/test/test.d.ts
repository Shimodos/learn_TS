interface IUser {
    login: string;
    password: string;
    token?: string;
}
interface IValidation {
    validation: boolean;
    isValid: (data: string) => boolean;
}
declare class UserForm implements IUser, IValidation {
    login: string;
    password: string;
    validation: boolean;
    token?: string | undefined;
    isValid(login: string): boolean;
}
