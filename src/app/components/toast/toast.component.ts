import {Component, OnInit} from '@angular/core';
import {ToastService} from 'src/app/services/toast.service';

@Component({
    selector: 'app-toast',
    templateUrl: './toast.component.html',
    styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit {
    private interval: number | null = null;

    public isVisible: boolean = false;
    public message: string = '';
    public type: string = '';

    public constructor(private service: ToastService) {}

    public ngOnInit(): void {
        this.service.setComponent(this);
    }

    public show(message: string, type: string): void {
        this.interval && clearInterval(this.interval);

        this.message = message;
        this.type = type;
        this.isVisible = true;

        const TIME_OUT = 3_000;

        this.interval = setInterval(() => {
            this.isVisible = false;
            this.interval = null;
        }, TIME_OUT);
    }

    public remove(): void {
        this.interval && clearInterval(this.interval);
        this.interval = null;
        this.isVisible = false;
    }
}
