import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ExpansionListItem} from 'src/app/interfaces/ExpansionListItem.interface';

@Component({
    selector: 'app-expansion-list',
    templateUrl: './expansion-list.component.html',
    styleUrls: ['./expansion-list.component.scss'],
})
export class ExpansionListComponent {
    @Input() public title: string = '';
    @Input() public items: ExpansionListItem[] = [];

    @Output() public itemsChange = new EventEmitter<ExpansionListItem[]>();

    public isExpanded: boolean = false;
    public searchPhrase: string = '';

    public emitItems(item: ExpansionListItem, event: boolean): void {
        this.itemsChange.emit(this.items.map((i) => (i.id === item.id ? {...i, isEnabled: event} : i)));
    }
}
