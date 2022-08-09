import {Component, OnInit} from '@angular/core';
import {ToastService} from 'src/app/services/toast.service';
import {ToastType} from 'src/app/services/ToastType.enum';

@Component({
    selector: 'app-toast',
    templateUrl: './toast.component.html',
    styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit {
    private interval: number | null = null;

    public isVisible: boolean = false;
    public message: string = '';
    public type: string = ToastType.WARNING;

    private TIME_OUT = 4_000;

    public constructor(private service: ToastService) {}

    public ngOnInit(): void {
        this.service.setComponent(this);
    }

    private hide(): void {
        this.isVisible = false;
        this.message = '';
        this.interval = null;
    }

    public show(message: string, type: ToastType): void {
        this.interval && clearInterval(this.interval);
        this.message = message;
        this.type = type;
        this.isVisible = true;

        this.interval = setInterval(() => {
            this.hide();
        }, this.TIME_OUT);
    }

    public remove(): void {
        this.interval && clearInterval(this.interval);
        this.hide();
    }
}
