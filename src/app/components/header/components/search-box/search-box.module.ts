import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SearchBoxComponent} from './search-box.component';

@NgModule({
    declarations: [SearchBoxComponent],
    exports: [SearchBoxComponent],
    imports: [CommonModule, FormsModule],
})
export class SearchBoxModule {}
