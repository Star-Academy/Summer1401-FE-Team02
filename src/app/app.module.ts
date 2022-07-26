import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LandingPageModule} from './pages/landing-page/landing-page.module';
import {NgxPopperjsModule} from 'ngx-popperjs';
import {AuthModule} from './pages/auth/auth.module';
import {ToastComponent} from './components/toast/toast.component';

@NgModule({
    declarations: [AppComponent, ToastComponent],
    imports: [BrowserModule, AppRoutingModule, LandingPageModule, AuthModule, NgxPopperjsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
