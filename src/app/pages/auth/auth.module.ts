import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AuthComponent} from './auth.component';
import {FormsModule} from '@angular/forms';
import {SignupFormComponent} from './components/signup-form/signup-form.component';
import {LoginFormComponent} from './components/login-form/login-form.component';
@NgModule({
    declarations: [AuthComponent, SignupFormComponent, LoginFormComponent],
    imports: [CommonModule, RouterModule, FormsModule],
})
export class AuthModule {}
