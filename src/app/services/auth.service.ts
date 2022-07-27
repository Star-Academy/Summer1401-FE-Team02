import {Injectable} from '@angular/core';
import {User} from '../interfaces/User.interface';
import {ApiService} from './api.service';
import {USER_AUTHENTICATE, USER_LOGIN, USER_SIGNUP} from '../utils/api.utils';
import {TokenObject} from '../interfaces/TokenObject.interface';
import {IdObject} from '../interfaces/id-object';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    public constructor(private apiService: ApiService) {}

    public async login(user: Partial<User>): Promise<boolean> {
        let data = await this.apiService.post<TokenObject>(USER_LOGIN, user, {}, true);

        if (data?.token) {
            localStorage.setItem('token', data?.token);
        }

        return !!data;
    }

    public async register(user: User): Promise<boolean> {
        let data = await this.apiService.post<TokenObject>(USER_SIGNUP, user, {}, true);

        if (data?.token) {
            localStorage.setItem('token', data?.token);
        }

        return !!data;
    }

    public async isLoggedIn(): Promise<boolean> {
        const token = localStorage.getItem('token') || '';

        const data = await this.apiService.post<IdObject>(USER_AUTHENTICATE, {token});
        return !!data;
    }

    public logout(): void {
        localStorage.removeItem('token');
        location.reload();
    }
}
