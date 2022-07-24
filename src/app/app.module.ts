import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LandingPageModule} from './pages/landing-page/landing-page.module';
import {NgxPopperjsModule} from 'ngx-popperjs';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, LandingPageModule, NgxPopperjsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
