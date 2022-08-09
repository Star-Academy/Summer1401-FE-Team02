import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FiltersComponent} from './components/filters/filters.component';
import {ExpansionListComponent} from './components/expansion-list/expansion-list.component';
import {FormsModule} from '@angular/forms';
import {SearchBoxModule} from 'src/app/components/search-box/search-box.module';
import {FilterPipeModule} from 'src/app/pipes/filter-pipe.module';

@NgModule({
    declarations: [FiltersComponent, ExpansionListComponent],
    imports: [CommonModule, FormsModule, SearchBoxModule, FilterPipeModule],
})
export class ArchiveModule {}
