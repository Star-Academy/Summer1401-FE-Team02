import {ComponentFixture, fakeAsync, TestBed, waitForAsync} from '@angular/core/testing';

import {HeaderComponent} from './header.component';
import {AuthService} from '../../services/auth.service';
import {RouterTestingModule} from '@angular/router/testing';

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;
    let host: HTMLElement;
    let authService: AuthService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HeaderComponent],
            imports: [RouterTestingModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        host = fixture.nativeElement as HTMLElement;
        authService = TestBed.inject(AuthService);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show auth - not logged in', fakeAsync(() => {
        spyOn(authService, 'isLoggedIn').and.returnValue(Promise.resolve(false));
        fixture.detectChanges();
        const loginLink = host.querySelector('[data-test-id="login-link"]');
        const signupLink = host.querySelector('[data-test-id="signup-link"]');

        fixture.whenStable().then(() => {
            expect(loginLink).toBeTruthy();
            expect(signupLink).toBeTruthy();
        });
    }));
});
