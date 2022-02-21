export interface CheckButtonProps {
    username: string;
    to: string;
    cc: string;
    fullName: string;
    onSuccess(): void;
    onFailure(): void;
    type: string;
}
