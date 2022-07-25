import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-text-field',
    templateUrl: './text-field.component.html',
    styleUrls: ['./text-field.component.scss'],
})
export class TextFieldComponent {
    @Input() public value: String = '';
    @Input() public placeholder: String = '';
    @Input() public type: String = '';

    @Output() public valueChange = new EventEmitter<string>();

    public dispatchChange(value: string): void {
        this.valueChange.emit(value);
    }
}
