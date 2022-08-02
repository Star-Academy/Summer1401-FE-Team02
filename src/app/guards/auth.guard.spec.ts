import {getTestBed, TestBed} from '@angular/core/testing';
import {AuthService} from '../services/auth.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AuthGuard} from './auth.guard';
import {Router} from '@angular/router';

describe('AuthGuard', () => {
    let guard: AuthGuard;
    let injector: TestBed;
    let authService: AuthService;
    let routeMock: any = {routeConfig: {path: ''}};
    let routeStateMock: any = {snapshot: {}, url: ''};
    let routerMock = {navigateByUrl: jasmine.createSpy('navigateByUrl')};

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AuthGuard, {provide: Router, useValue: routerMock}],
            imports: [HttpClientTestingModule],
        });
        guard = TestBed.inject(AuthGuard);
        injector = getTestBed();

        authService = injector.get(AuthService);
    });

    it('should activate with logged in and profile', async () => {
        spyOn(authService, 'isLoggedIn').and.returnValue(Promise.resolve(true));
        routeMock.routeConfig.path = 'profile';

        expect(await guard.canActivate(routeMock, routeStateMock)).toBeTrue();
    });

    it('should activate with not logged in and login', async () => {
        spyOn(authService, 'isLoggedIn').and.returnValue(Promise.resolve(false));
        routeMock.routeConfig.path = 'login';

        expect(await guard.canActivate(routeMock, routeStateMock)).toBeTrue();
    });

    it('should not activate with logged in and signup', async () => {
        spyOn(authService, 'isLoggedIn').and.returnValue(Promise.resolve(true));
        routeMock.routeConfig.path = 'signup';

        expect(await guard.canActivate(routeMock, routeStateMock)).toBeFalse();
    });

    it('should not activate with not logged in and profile', async () => {
        spyOn(authService, 'isLoggedIn').and.returnValue(Promise.resolve(false));
        routeMock.routeConfig.path = 'profile';

        expect(await guard.canActivate(routeMock, routeStateMock)).toBeFalse();
    });
});
