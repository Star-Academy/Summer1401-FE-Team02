import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-number-input',
    templateUrl: './number-input.component.html',
    styleUrls: ['./number-input.component.scss'],
})
export class NumberInputComponent {
    @Input() public title: string = '';
    @Input() public value: number | null = null;

    @Output() public valueChange = new EventEmitter<number>();
}
