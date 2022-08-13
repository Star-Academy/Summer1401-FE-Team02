import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from './pages/landing-page/landing-page.component';
import {AuthComponent} from './pages/auth/auth.component';
import {AuthGuard} from './guards/auth.guard';
import {ProfileComponent} from './pages/profile/profile.component';
import {ArchiveComponent} from './pages/archive/archive.component';
import {GameComponent} from './pages/game/game.component';
import {BookmarkComponent} from './pages/bookmark/bookmark.component';
import {LayoutComponent} from './Layout/layout/layout.component';

const routes: Routes = [
    {path: 'login', component: AuthComponent, canActivate: [AuthGuard]},
    {path: 'signup', component: AuthComponent, canActivate: [AuthGuard]},
    {
        path: '',
        component: LayoutComponent,
        children: [
            {path: '', pathMatch: 'full', component: LandingPageComponent},
            {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
            {path: 'games', component: ArchiveComponent},
            {path: 'game/:id', component: GameComponent},
            {path: 'favorites', component: BookmarkComponent, canActivate: [AuthGuard]},
            {path: 'wishlist', component: BookmarkComponent, canActivate: [AuthGuard]},
        ],
    },
    {path: '**', redirectTo: ''},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
