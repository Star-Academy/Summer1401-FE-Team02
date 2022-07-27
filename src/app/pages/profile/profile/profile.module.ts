import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileComponent} from './profile.component';
import {RouterModule} from '@angular/router';
import {HeaderModule} from '../../../components/header/header.module';
import {FooterModule} from '../../../components/footer/footer.module';

@NgModule({
    declarations: [ProfileComponent],
    imports: [CommonModule, RouterModule, HeaderModule, FooterModule],
})
export class ProfileModule {}
