import {state, style, trigger} from '@angular/animations';
import {Component} from '@angular/core';

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
export class ToastComponent {
    private interval: number | null = null;
    public isVisible: boolean = false;
    public constructor() {}

    public show(): void {
        this.interval && clearInterval(this.interval);
        this.isVisible = true;
        this.interval = setInterval(() => {
            this.isVisible = false;
        }, 3000);
    }

    public remove(): void {
        this.interval && clearInterval(this.interval);
        this.isVisible = false;
    }
}
