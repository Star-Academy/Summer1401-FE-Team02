import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderComponent} from './header.component';
import {AuthService} from '../../services/auth.service';
import {SearchBoxComponent} from './components/search-box/search-box.component';

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;
    let host: HTMLElement;
    let authService: AuthService;
    let injector: TestBed;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HeaderComponent],
            imports: [SearchBoxComponent],
        }).compileComponents();
        authService = injector.get(AuthService);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show profile when logged in', () => {
        const login_link = host.querySelector('#login_link');
        const signup_link = host.querySelector('#signup_link');
        spyOn(authService, 'isLoggedIn').and.returnValue(Promise.resolve(true));
        expect(login_link).toBeTruthy();
        expect(signup_link).toBeTruthy();
    });

    it('should show profile when logged in', () => {
        const login_link = host.querySelector('#login_link');
        const signup_link = host.querySelector('#signup_link');
        spyOn(authService, 'isLoggedIn').and.returnValue(Promise.resolve(false));
        expect(login_link).toBeFalsy();
        expect(signup_link).toBeFalsy();
    });
});
