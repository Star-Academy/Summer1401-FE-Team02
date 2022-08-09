import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header.component';
import {AppRoutingModule} from '../../app-routing.module';
import {ProfilePopperComponent} from './components/profile-popper/profile-popper.component';
import {NgxPopperjsModule} from 'ngx-popperjs';
import {SearchBoxModule} from '../search-box/search-box.module';

@NgModule({
    declarations: [HeaderComponent, ProfilePopperComponent],
    exports: [HeaderComponent],
    imports: [CommonModule, AppRoutingModule, NgxPopperjsModule, SearchBoxModule],
})
export class HeaderModule {}
