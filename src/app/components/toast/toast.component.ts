import {animate, state, style, transition, trigger} from '@angular/animations';
import {Component, OnInit, HostBinding} from '@angular/core';
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
                    display: 'inline',
                })
            ),
            state(
                'invisible',
                style({
                    opacity: 0,
                    display: 'none',
                })
            ),
            transition('visible => invisible', [animate('0.3s')]),
            transition('invisible => visible', [animate('0.3s')]),
        ]),
    ],
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
