import {ComponentFixture, TestBed, fakeAsync} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {SignupFormComponent} from './signup-form.component';
import {FormsModule} from '@angular/forms';
import {User} from 'src/app/interfaces/User.interface';

describe('SignupFormComponent', () => {
    let component: SignupFormComponent;
    let fixture: ComponentFixture<SignupFormComponent>;
    let host: HTMLElement;

    const queries: User = {
        firstName: '[name="firstname"]',
        lastName: '[name="lastname"]',
        username: '[name="username"]',
        email: '[name="email"]',
        password: '[name="password"]',
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SignupFormComponent],
            imports: [RouterTestingModule, FormsModule],
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
        Object.values(queries).forEach((query) => {
            const queryField = host.querySelector(query) as HTMLInputElement;
            expect(queryField).toBeTruthy();
        });
    });

    it('should change input', fakeAsync(() => {
        const fields: User = {
            firstName: 'name1',
            lastName: 'family1',
            username: 'user1',
            email: 'email1',
            password: 'pass1',
        };

        component.user = {
            ...fields,
        };

        fixture.detectChanges();

        fixture.whenStable().then(() => {
            (Object.keys(queries) as Array<keyof User>).forEach((key) => {
                const queryField = host.querySelector(queries[key] as string) as HTMLInputElement;
                expect(queryField.value).toEqual(fields[key] as string);
            });
        });
    }));
});
