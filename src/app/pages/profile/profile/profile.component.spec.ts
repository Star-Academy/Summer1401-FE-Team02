import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {LocalStorageMock} from 'src/app/mocks/local-storage.mock';

import {ProfileComponent} from './profile.component';

describe('ProfileComponent', () => {
    let component: ProfileComponent;
    let fixture: ComponentFixture<ProfileComponent>;
    let host: HTMLElement;
    let localStorageMock: LocalStorageMock;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ProfileComponent],
            imports: [RouterTestingModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ProfileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;

        localStorageMock = new LocalStorageMock();
        spyOn(localStorage, 'setItem').and.callFake(localStorageMock.setItem.bind(localStorageMock));
        spyOn(localStorage, 'removeItem').and.callFake(localStorageMock.removeItem.bind(localStorageMock));
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should logout', () => {
        localStorageMock.setItem('token', 'value');
        component.logout();
        expect(localStorageMock.getItem('token')).toBeFalsy();
    });
});
