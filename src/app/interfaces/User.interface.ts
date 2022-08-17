export interface User {
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phone?: string;
    dateOfBirth?: string;
    gender?: boolean;
    token?: string;
    avatar?: string;
}
