import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LandingPageModule} from './pages/landing-page/landing-page.module';
import {NgxPopperjsModule} from 'ngx-popperjs';
import {AuthModule} from './pages/auth/auth.module';
import {FooterModule} from './components/footer/footer.module';
import {HeaderModule} from './components/header/header.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        LandingPageModule,
        AuthModule,
        NgxPopperjsModule,
        FooterModule,
        HeaderModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
