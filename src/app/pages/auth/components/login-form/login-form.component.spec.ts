import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
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

    it('should change input', () => {
        let username = 'user1';
        let password = 'pass1';

        component.user = {
            username,
            password,
        };

        fixture.detectChanges();

        fixture.whenStable().then(() => {
            let usernameField = host.querySelector('[name="username"]') as HTMLInputElement;
            let passwordField = host.querySelector('[name="password"]') as HTMLInputElement;

            expect(usernameField.value).toEqual(username);
            expect(passwordField.value).toEqual(password);
        });
    });

    // it('should change user', fakeAsync(() => {
    //     fixture.detectChanges();

    //     let usernameField = fixture.debugElement.query(By.css('name=["username"]')).nativeElement;
    //     // let passwordField = host.querySelector('[name="password"]') as HTMLInputElement;

    //     let username = 'user2';
    //     // let password = 'pass2';

    //     usernameField.value = username;
    //     fixture.detectChanges();
    //     usernameField.dispatchEvent(new Event('input'));

    //     fixture.detectChanges();
    //     tick();

    //     expect(component.user.username).toEqual(username);
    // }));
});
