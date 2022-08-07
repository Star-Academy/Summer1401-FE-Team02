import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {ActivatedRoute} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';

import {AuthComponent} from './auth.component';

describe('AuthComponent', () => {
    let component: AuthComponent;
    let fixture: ComponentFixture<AuthComponent>;
    let host: HTMLElement;
    const RouteMock = {routeConfig: {path: ''}};

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AuthComponent],
            imports: [RouterTestingModule],
            providers: [{provide: ActivatedRoute, useValue: RouteMock}],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AuthComponent);
        component = fixture.componentInstance;
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should be login', waitForAsync(() => {
        RouteMock.routeConfig.path = 'login';
        fixture.detectChanges();

        fixture.whenStable().then(() => {
            expect(component.isLogin).toBeTrue();
            expect(host.querySelector('app-login-form')).toBeTruthy();
        });
    }));

    it('should not be login', waitForAsync(() => {
        RouteMock.routeConfig.path = 'signup';
        fixture.detectChanges();

        fixture.whenStable().then(() => {
            expect(component.isLogin).toBeFalse();
            expect(host.querySelector('app-signup-form')).toBeTruthy();
        });
    }));
});
