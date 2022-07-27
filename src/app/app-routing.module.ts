import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from './pages/landing-page/landing-page.component';
import {AuthComponent} from './pages/auth/auth.component';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
    {path: '', pathMatch: 'full', component: LandingPageComponent},
    {path: 'login', component: AuthComponent, canActivate: [AuthGuard]},
    {path: 'signup', component: AuthComponent, canActivate: [AuthGuard]},
    // {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
    {path: '**', redirectTo: ''},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
