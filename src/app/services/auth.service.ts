import {Injectable} from '@angular/core';
import {User} from '../interfaces/User.interface';
import {ApiService} from './api.service';
import {USER_AUTHENTICATE, USER_LOGIN, USER_ONE, USER_SIGNUP} from '../utils/api.utils';
import {TokenObject} from '../interfaces/TokenObject.interface';
import {IdObject} from '../interfaces/IdObject';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    public cachedIsLoggedIn: boolean | null = null;
    public cachedUserId: number | null = null;
    public cachedUser: User | null = null;

    public constructor(private apiService: ApiService) {}

    public get token(): string {
        return localStorage.getItem('token') || '';
    }

    public async login(user: Partial<User>): Promise<boolean> {
        const data = await this.apiService.post<TokenObject>(USER_LOGIN, user, {}, true);

        if (data?.token) {
            this.saveCache(data?.token, true, data?.id);
        }

        return !!data;
    }

    public async signup(user: User): Promise<boolean> {
        const data = await this.apiService.post<TokenObject>(USER_SIGNUP, user, {}, true);

        if (data?.token) {
            this.saveCache(data?.token, true, data?.id);
        }

        return !!data;
    }

    public async auth(): Promise<boolean> {
        const token = localStorage.getItem('token') || '';

        const data = await this.apiService.post<IdObject>(USER_AUTHENTICATE, {token});
        await this.saveCache(this.token, !!data, data?.id ?? null);
        return !!this.cachedIsLoggedIn;
    }

    public async isLoggedIn(): Promise<boolean> {
        if (this.cachedIsLoggedIn !== null) return this.cachedIsLoggedIn;
        return await this.auth();
    }

    public async fetchUserInfo(): Promise<User | null> {
        const response = await this.apiService.get<{user: User}>(`${USER_ONE}/${this.cachedUserId}`);
        return response?.user || null;
    }

    public logout(): void {
        this.saveCache(null, false, null);
    }

    private async saveCache(token: string | null, isLoggedIn: boolean, userId: number | null): Promise<void> {
        if (!!token) localStorage.setItem('token', token);
        else localStorage.removeItem('token');

        this.cachedIsLoggedIn = isLoggedIn;
        this.cachedUserId = userId;

        if (this.cachedUserId) this.cachedUser = await this.fetchUserInfo();
    }
}
