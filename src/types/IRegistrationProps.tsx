import { INotify } from "./INotify";
import { IUser } from "./IUser";

export interface IRegistrationProps {
    user: IUser,
    notify: INotify
    onConfirm(user: IUser, notify: INotify): void;
}
