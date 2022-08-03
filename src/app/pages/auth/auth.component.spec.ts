import {ComponentFixture, TestBed} from '@angular/core/testing';
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

    it('should be login', () => {
        RouteMock.routeConfig.path = 'login';
        fixture.detectChanges();

        fixture.whenStable().then(() => {
            expect(component.isLogin).toBeTrue();
        });
    });

    it('should not be login', () => {
        RouteMock.routeConfig.path = 'signup';
        fixture.detectChanges();

        fixture.whenStable().then(() => {
            expect(component.isLogin).toBeTrue();
        });
    });
});
