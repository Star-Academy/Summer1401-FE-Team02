import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-search-box',
    templateUrl: './search-box.component.html',
    styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent {
    @Input() public value: string = '';
    @Output() public valueChange = new EventEmitter<string>();
}
