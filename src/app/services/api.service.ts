import {Injectable} from '@angular/core';
import {Error} from '../interfaces/Error.interface';
import {POST_INIT} from '../utils/api.utils';
import {ToastService} from './toast.service';
import {ToastType} from '../enums/ToastType.enum';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    public constructor(private toastService: ToastService) {}

    private async fetchData<T>(
        url: string,
        init: Partial<RequestInit> = {},
        toastOnError: boolean = false
    ): Promise<T | null> {
        let response = await fetch(url, init);
        let data = await response.json();

        if (response.ok) {
            return data as T;
        }

        toastOnError && this.toastService.show((data as Error).message, ToastType.WARNING);

        return null;
    }

    public async post<T>(
        url: string,
        body: any = '',
        init: Partial<RequestInit> = {},
        toastOnError: boolean = false
    ): Promise<T | null> {
        return await this.fetchData(url, {...POST_INIT, body: JSON.stringify(body), ...init}, toastOnError);
    }

    public async get<T>(
        url: string,
        init: Partial<RequestInit> = {},
        toastOnError: boolean = false
    ): Promise<T | null> {
        return await this.fetchData(url, init, toastOnError);
    }
}
