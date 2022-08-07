import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header.component';
import {SearchBoxComponent} from './components/search-box/search-box.component';
import {AppRoutingModule} from '../../app-routing.module';
import {ProfilePopperComponent} from './components/profile-popper/profile-popper.component';
import {NgxPopperjsModule} from 'ngx-popperjs';

@NgModule({
    declarations: [HeaderComponent, SearchBoxComponent, ProfilePopperComponent],
    exports: [HeaderComponent],
    imports: [CommonModule, AppRoutingModule, NgxPopperjsModule],
})
export class HeaderModule {}
