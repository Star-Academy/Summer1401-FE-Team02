import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../services/auth.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    public constructor(private router: Router, private authService: AuthService) {}

    public async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        if (await this.isAllowed(route)) return true;

        await this.router.navigateByUrl('/');
        return false;
    }

    private async isAllowed(route: ActivatedRouteSnapshot): Promise<boolean> {
        const isLoggedIn = await this.authService.isLoggedIn();
        const wantsToNavigateToAuthPage =
            !!route.routeConfig?.path?.startsWith('login') || !!route.routeConfig?.path?.startsWith('signup');

        if (isLoggedIn) return !wantsToNavigateToAuthPage;
        return wantsToNavigateToAuthPage;
    }
}
