import {ComponentFixture, TestBed, tick, fakeAsync} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {RouterTestingModule} from '@angular/router/testing';

import {LoginFormComponent} from './login-form.component';

describe('LoginFormComponent', () => {
    let component: LoginFormComponent;
    let fixture: ComponentFixture<LoginFormComponent>;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LoginFormComponent],
            imports: [RouterTestingModule, FormsModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render form', () => {
        const usernameField = host.querySelector('[name="username"]') as HTMLInputElement;
        const passwordField = host.querySelector('[name="password"]') as HTMLInputElement;

        expect(usernameField).toBeTruthy();
        expect(passwordField).toBeTruthy();
    });

    it('should change input', fakeAsync(() => {
        const username = 'user1';
        const password = 'pass1';

        component.user = {
            username,
            password,
        };

        fixture.detectChanges();

        fixture.whenStable().then(() => {
            const usernameField = host.querySelector('[name="username"]') as HTMLInputElement;
            const passwordField = host.querySelector('[name="password"]') as HTMLInputElement;

            expect(usernameField.value).toEqual(username);
            expect(passwordField.value).toEqual(password);
        });
    }));
});
