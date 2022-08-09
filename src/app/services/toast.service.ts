import {Injectable} from '@angular/core';
import {ToastComponent} from '../components/toast/toast.component';
import {ToastType} from '../enums/ToastType.enum';

@Injectable({
    providedIn: 'root',
})
export class ToastService {
    private toast: ToastComponent | null = null;

    public setComponent(toast: ToastComponent): void {
        this.toast = toast;
    }

    public show(message: string, type: ToastType = ToastType.WARNING): void {
        this.toast?.show(message, type);
    }
}
