import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header.component';
import {SearchBoxComponent} from './components/search-box/search-box.component';
import {AppRoutingModule} from "../../app-routing.module";

@NgModule({
    declarations: [HeaderComponent, SearchBoxComponent],
    exports: [HeaderComponent],
    imports: [CommonModule, AppRoutingModule],
})
export class HeaderModule {}
