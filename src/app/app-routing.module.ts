import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from './pages/landing-page/landing-page.component';
import {AuthComponent} from './pages/auth/auth.component';

const routes: Routes = [
    {path: 'login', component: AuthComponent},
    {path: 'signup', component: AuthComponent},
    {path: '', pathMatch: 'full', component: LandingPageComponent},
    {path: '**', redirectTo: ''},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
