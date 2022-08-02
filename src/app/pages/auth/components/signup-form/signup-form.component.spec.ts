import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {SignupFormComponent} from './signup-form.component';

describe('SignupFormComponent', () => {
    let component: SignupFormComponent;
    let fixture: ComponentFixture<SignupFormComponent>;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SignupFormComponent],
            imports: [RouterTestingModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SignupFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render form', () => {
        const firstnameField = host.querySelector('[name="firstname"]') as HTMLInputElement;
        const lastnameField = host.querySelector('[name="lastname"]') as HTMLInputElement;
        const usernameField = host.querySelector('[name="username"]') as HTMLInputElement;
        const emailField = host.querySelector('[name="email"]') as HTMLInputElement;
        const passwordField = host.querySelector('[name="password"]') as HTMLInputElement;

        expect(firstnameField).toBeTruthy();
        expect(lastnameField).toBeTruthy();
        expect(usernameField).toBeTruthy();
        expect(emailField).toBeTruthy();
        expect(passwordField).toBeTruthy();
    });

    it('should change input', () => {
        const firstName = 'name1';
        const lastName = 'family1';
        const username = 'user1';
        const email = 'email1';
        const password = 'pass1';

        component.user = {
            firstName,
            lastName,
            username,
            email,
            password,
        };

        fixture.detectChanges();

        fixture.whenStable().then(() => {
            const firstnameField = host.querySelector('[name="firstname"]') as HTMLInputElement;
            const lastnameField = host.querySelector('[name="lastname"]') as HTMLInputElement;
            const usernameField = host.querySelector('[name="username"]') as HTMLInputElement;
            const emailField = host.querySelector('[name="email"]') as HTMLInputElement;
            const passwordField = host.querySelector('[name="password"]') as HTMLInputElement;

            expect(firstnameField.value).toEqual(firstName);
            expect(lastnameField.value).toEqual(lastName);
            expect(usernameField.value).toEqual(username);
            expect(emailField.value).toEqual(email);
            expect(passwordField.value).toEqual(password);
        });
    });
});
