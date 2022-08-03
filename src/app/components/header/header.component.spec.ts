import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderComponent} from './header.component';
import {AuthService} from '../../services/auth.service';

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;
    let host: HTMLElement;
    let authService: AuthService;
    let isLoggedIn: boolean;
    let getLogSpy;

    beforeEach(async () => {
        isLoggedIn = false;

        const authServiceStub = jasmine.createSpyObj('AuthService', ['isLoggedIn']);
        getLogSpy = authServiceStub.isLoggedIn.and.returnValue(isLoggedIn);

        await TestBed.configureTestingModule({
            declarations: [HeaderComponent],
            providers: [{provide: AuthService, useValue: authServiceStub}],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        authService = TestBed.inject(AuthService);
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show auth - not logged in', () => {
        fixture.detectChanges();
        const loginLink = host.querySelector('#login-link');
        const signupLink = host.querySelector('#signup-link');

        fixture.whenStable().then(() => {
            expect(loginLink).toBeTruthy();
            expect(signupLink).toBeTruthy();
        });
    });

    it('should show profile - logged in', () => {
        isLoggedIn = true;

        fixture.detectChanges();
        const profile = host.querySelector('.fa-user');
        const cart = host.querySelector('.fa-basket-shopping');

        fixture.whenStable().then(() => {
            expect(component.isLoggedIn).toBeTrue();
            expect(profile).toBeTruthy();
            expect(cart).toBeTruthy();
        });
    });
});
