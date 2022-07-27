import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LandingPageModule} from './pages/landing-page/landing-page.module';
import {NgxPopperjsModule} from 'ngx-popperjs';
import {AuthModule} from './pages/auth/auth.module';
import {ToastComponent} from './components/toast/toast.component';
import {ProfileModule} from './pages/profile/profile/profile.module';
import {AuthGuard} from './guards/auth.guard';

@NgModule({
    declarations: [AppComponent, ToastComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        LandingPageModule,
        AuthModule,
        NgxPopperjsModule,
        BrowserModule,
        BrowserAnimationsModule,
        ProfileModule,
    ],
    bootstrap: [AppComponent],
    providers: [AuthGuard],
})
export class AppModule {}
