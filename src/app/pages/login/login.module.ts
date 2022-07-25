import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterModule} from 'src/app/components/footer/footer.module';
import {HeaderModule} from 'src/app/components/header/header.module';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login.component';

@NgModule({
    declarations: [LoginComponent],
    imports: [CommonModule, RouterModule, FooterModule, HeaderModule],
})
export class LoginModule {}
