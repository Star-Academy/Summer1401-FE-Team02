import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderModule} from 'src/app/components/header/header.module';
import {FooterModule} from 'src/app/components/footer/footer.module';
import {AppRoutingModule} from 'src/app/app-routing.module';
import {LayoutComponent} from './layout.component';

@NgModule({
    declarations: [LayoutComponent],
    exports: [LayoutComponent],
    imports: [CommonModule, HeaderModule, FooterModule, AppRoutingModule],
})
export class LayoutModule {}
