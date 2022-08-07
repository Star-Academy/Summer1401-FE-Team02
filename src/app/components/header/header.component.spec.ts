import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {HeaderComponent} from './header.component';
import {AuthService} from '../../services/auth.service';

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;
    let host: HTMLElement;
    let authService: AuthService;
    let isLoggedIn: boolean;
    let isLoggedInSpy: boolean;

    beforeEach(async () => {
        isLoggedIn = false;

        const authServiceStub = jasmine.createSpyObj('AuthService', ['isLoggedIn']);
        isLoggedInSpy = authServiceStub.isLoggedIn.and.returnValue(isLoggedIn);

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

    it('should show auth - not logged in', waitForAsync(() => {
        fixture.detectChanges();
        const loginLink = host.querySelector('[data-test-id="login-link"]');
        const signupLink = host.querySelector('[data-test-id="signup-link"]');

        fixture.whenStable().then(() => {
            expect(loginLink).toBeTruthy();
            expect(signupLink).toBeTruthy();
        });
    }));

    it('should show profile - logged in', waitForAsync(() => {
        isLoggedIn = true;
        fixture.detectChanges();
        const profile = host.querySelector('.fa-user');
        const cart = host.querySelector('.fa-basket-shopping');

        fixture.whenStable().then(() => {
            expect(component.isLoggedIn).toBeTrue();
            expect(profile).toBeTruthy();
            expect(cart).toBeTruthy();
        });
    }));
});
