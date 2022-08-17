import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileComponent} from './profile.component';
import {RouterModule} from '@angular/router';
import {HeaderModule} from 'src/app/components/header/header.module';
import {FooterModule} from 'src/app/components/footer/footer.module';
import {FormsModule} from '@angular/forms';
import {NgPersianDatepickerModule} from 'ng-persian-datepicker';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [ProfileComponent],
    imports: [
        CommonModule,
        NgPersianDatepickerModule,
        ReactiveFormsModule,
        RouterModule,
        HeaderModule,
        FooterModule,
        FormsModule,
    ],
})
export class ProfileModule {}
