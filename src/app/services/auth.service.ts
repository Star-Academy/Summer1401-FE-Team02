import {Injectable} from '@angular/core';
import {User} from '../interfaces/User.interface';
import {ApiService} from './api.service';
import {USER_LOGIN, USER_SIGNUP} from '../utils/api.utils';
import {TokenObject} from '../interfaces/TokenObject.interface';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    public constructor(private apiService: ApiService) {}
    public async login(user: Partial<User>): Promise<boolean> {
        let data = await this.apiService.post<TokenObject>(USER_LOGIN, user);

        if (data?.token) {
            localStorage.setItem('token', data?.token);
        }

        return !!data;
    }

    public async register(user: User): Promise<boolean> {
        let data = await this.apiService.post<TokenObject>(USER_SIGNUP, user);

        if (data?.token) {
            localStorage.setItem('token', data?.token);
        }

        return !!data;
    }
}
