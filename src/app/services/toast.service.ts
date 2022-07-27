import {Injectable} from '@angular/core';
import {ToastComponent} from '../components/toast/toast.component';

@Injectable({
    providedIn: 'root',
})
export class ToastService {
    private toast: ToastComponent | null = null;

    public setComponent(toast: ToastComponent): void {
        this.toast = toast;
    }

    public show(message: string, type: string): void {
        this.toast?.show(message, type);
    }
}
