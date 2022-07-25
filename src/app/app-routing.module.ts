import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from './pages/landing-page/landing-page.component';
import {LoginComponent} from './pages/login/login.component';

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: '', pathMatch: 'full', component: LandingPageComponent},
    {path: '**', redirectTo: ''},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
