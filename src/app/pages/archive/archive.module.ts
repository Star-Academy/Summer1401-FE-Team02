import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FiltersComponent} from './components/filters/filters.component';
import {ExpansionListComponent} from './components/expansion-list/expansion-list.component';
import {FormsModule} from '@angular/forms';
import {SearchBoxModule} from 'src/app/components/search-box/search-box.module';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
    declarations: [FiltersComponent, ExpansionListComponent, FilterPipe],
    imports: [CommonModule, FormsModule, SearchBoxModule],
})
export class ArchiveModule {}
