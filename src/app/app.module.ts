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
import {FavoritesModule} from './pages/favorites/favorites.module';
import {WishlistModule} from './pages/wishlist/wishlist.module';

@NgModule({
    declarations: [AppComponent, ToastComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        LandingPageModule,
        AuthModule,
        BrowserModule,
        ProfileModule,
        FormsModule,
        ArchiveModule,
        GameModule,
        FavoritesModule,
        WishlistModule,
    ],
    bootstrap: [AppComponent],
    providers: [AuthGuard],
})
export class AppModule {}
