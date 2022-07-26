import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LandingPageModule} from './pages/landing-page/landing-page.module';
import {NgxPopperjsModule} from 'ngx-popperjs';
import {LoginModule} from './pages/login/login.module';
import {FooterModule} from './components/footer/footer.module';
import {HeaderModule} from './components/header/header.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        LandingPageModule,
        LoginModule,
        NgxPopperjsModule,
        FooterModule,
        HeaderModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
