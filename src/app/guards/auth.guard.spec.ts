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

    it('should not activate - logged in - login route', () => {
        checkRouteActivation('login', true, false);
    });

    it('should not activate - logged in - signup route', () => {
        checkRouteActivation('signup', true, false);
    });

    it('should not activate - not logged in - profile route', () => {
        checkRouteActivation('profile', false, false);
    });

    it('should activate - not logged in - login route', () => {
        checkRouteActivation('login', false, true);
    });

    it('should activate - not logged in - signup route', () => {
        checkRouteActivation('signup', false, true);
    });

    it('should activate - logged in - profile route', () => {
        checkRouteActivation('profile', true, true);
    });

    const checkRouteActivation = async (url: string, loggedIn: boolean, expectedResult: boolean): Promise<void> => {
        spyOn(authService, 'isLoggedIn').and.returnValue(Promise.resolve(expectedResult));
        routeMock.routeConfig.path = url;

        expect(await guard.canActivate(routeMock, routeStateMock)).toEqual(loggedIn);
    };
});
