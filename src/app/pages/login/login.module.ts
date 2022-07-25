import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterModule} from 'src/app/components/footer/footer.module';
import {HeaderModule} from 'src/app/components/header/header.module';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login.component';
import {TextFieldComponent} from 'src/app/components/text-field/text-field.component';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [LoginComponent, TextFieldComponent],
    imports: [CommonModule, RouterModule, FooterModule, HeaderModule, FormsModule],
})
export class LoginModule {}
