import { Moment } from "moment-timezone";

export interface ICheckButtonProps {
    username: string;
    to: string;
    cc: string;
    fullName: string;
    onSuccess(time: Moment): void;
    onFailure(): void;
    type: string;
}
