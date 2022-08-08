import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileComponent} from './profile.component';
import {RouterModule} from '@angular/router';
import {HeaderModule} from '../../../components/header/header.module';
import {FooterModule} from '../../../components/footer/footer.module';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [ProfileComponent],
    imports: [CommonModule, RouterModule, HeaderModule, FooterModule, FormsModule],
})
export class ProfileModule {}
