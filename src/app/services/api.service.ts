import {Injectable} from '@angular/core';
import {POST_INIT, GET_INIT} from '../utils/api.utils';
import {ToastService} from './toast.service';
import {ToastType} from './ToastType.enum';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    public constructor(private toastService: ToastService) {}

    public async post<T>(url: string, body: any = '', init: Partial<RequestInit> = {}): Promise<T | null> {
        let response = await fetch(url, {...POST_INIT, body: JSON.stringify(body), ...init});
        let data = await response.json();

        if (response.status === 200) {
            return data as T;
        }

        this.toastService.show('hi', ToastType.WARNING);

        return null;
    }

    public async get<T>(url: string, init: Partial<RequestInit> = {}): Promise<T | null> {
        let response = await fetch(url, {...POST_INIT, ...init});
        let data = await response.json();

        if (response.status === 200) {
            return data as T;
        }

        return null;
    }
}
