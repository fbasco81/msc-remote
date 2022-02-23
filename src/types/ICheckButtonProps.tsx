export interface ICheckButtonProps {
    username: string;
    to: string;
    cc: string;
    fullName: string;
    onSuccess(): void;
    onFailure(): void;
    type: string;
}
