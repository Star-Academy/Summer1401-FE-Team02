import {state, style, trigger} from '@angular/animations';
import {Component, OnInit} from '@angular/core';
import {ToastService} from 'src/app/services/toast.service';

@Component({
    selector: 'app-toast',
    templateUrl: './toast.component.html',
    styleUrls: ['./toast.component.scss'],
    animations: [
        trigger('visibility', [
            state(
                'visible',
                style({
                    opacity: 1,
                    display: 'block',
                })
            ),
            state(
                'invisible',
                style({
                    opacity: 0,
                    display: 'none',
                })
            ),
        ]),
    ],
})
export class ToastComponent implements OnInit {
    private interval: number | null = null;

    public isVisible: boolean = false;
    public message: string = '';
    public color: string = '';

    public constructor(private service: ToastService) {}

    public ngOnInit(): void {
        this.service.setComponent(this);
    }

    public show(message: string, color: string): void {
        this.interval && clearInterval(this.interval);
        this.interval = null;

        this.message = message;
        this.color = color;

        this.isVisible = true;
        this.interval = setInterval(() => {
            this.isVisible = false;
            this.interval = null;
        }, 3000);
    }

    public remove(): void {
        this.interval && clearInterval(this.interval);
        this.interval = null;
        this.isVisible = false;
    }
}
