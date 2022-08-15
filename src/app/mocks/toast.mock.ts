import {ToastType} from '../enums/ToastType.enum';

export class ToastServiceMock {
    public message: string = '';
    public type: ToastType = ToastType.INFO;
    public show(message: string, type: ToastType = ToastType.WARNING): void {
        this.message = message;
        this.type = type;
    }
}
