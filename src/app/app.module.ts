import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LandingPageModule} from './pages/landing-page/landing-page.module';
import {AuthModule} from './pages/auth/auth.module';
import {ToastComponent} from './components/toast/toast.component';
import {ProfileModule} from './pages/profile/profile.module';
import {AuthGuard} from './guards/auth.guard';
import {FormsModule} from '@angular/forms';
import {ArchiveModule} from './pages/archive/archive.module';
import {GameModule} from './pages/game/game.module';
import {BookmarkModule} from './pages/bookmark/bookmark.module';
import {RouterModule} from '@angular/router';
import {LayoutComponent} from './Layout/layout/layout.component';
import {LayoutModule} from './Layout/layout/layout.module';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
    declarations: [AppComponent, ToastComponent, SpinnerComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        LayoutModule,
        LandingPageModule,
        AuthModule,
        BrowserModule,
        ProfileModule,
        FormsModule,
        ArchiveModule,
        GameModule,
        BookmarkModule,
        RouterModule,
        RouterModule.forRoot([]),
    ],
    bootstrap: [AppComponent],
    providers: [AuthGuard],
})
export class AppModule {}
