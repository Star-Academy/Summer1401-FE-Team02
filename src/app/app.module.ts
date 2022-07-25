import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LandingPageModule} from './pages/landing-page/landing-page.module';
import {NgxPopperjsModule} from 'ngx-popperjs';
import {LoginComponent} from './pages/login/login.component';
import {LoginModule} from './pages/login/login.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, LandingPageModule, LoginModule, NgxPopperjsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
