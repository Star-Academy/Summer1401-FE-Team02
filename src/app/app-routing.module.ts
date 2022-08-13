import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from './pages/landing-page/landing-page.component';
import {AuthComponent} from './pages/auth/auth.component';
import {AuthGuard} from './guards/auth.guard';
import {ProfileComponent} from './pages/profile/profile.component';
import {ArchiveComponent} from './pages/archive/archive.component';
import {GameComponent} from './pages/game/game.component';
import {FavoritesComponent} from './pages/favorites/favorites.component';
import {WishlistComponent} from './pages/wishlist/wishlist.component';

const routes: Routes = [
    {path: '', pathMatch: 'full', component: LandingPageComponent},
    {path: 'login', component: AuthComponent, canActivate: [AuthGuard]},
    {path: 'signup', component: AuthComponent, canActivate: [AuthGuard]},
    {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
    {path: 'favorites', component: FavoritesComponent, canActivate: [AuthGuard]},
    {path: 'wishlist', component: WishlistComponent, canActivate: [AuthGuard]},
    {path: 'games', component: ArchiveComponent},
    {path: 'game/:id', component: GameComponent},
    {path: '**', redirectTo: ''},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
