import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AuthComponent} from './auth.component';
import {FormsModule} from '@angular/forms';
import {TextInputComponent} from 'src/app/components/text-input/text-input.component';

@NgModule({
    declarations: [AuthComponent, TextInputComponent],
    imports: [CommonModule, RouterModule, FormsModule],
})
export class AuthModule {}
