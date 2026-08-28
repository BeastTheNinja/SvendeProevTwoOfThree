export type Comment = {
    id: number;
    comment: string;
    user: {
        firstname: string;
        lastname: string;
        email: string;
    };
};