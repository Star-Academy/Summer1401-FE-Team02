import {ComponentFixture, TestBed} from '@angular/core/testing';
import {LocalStorageMock} from 'src/app/mocks/local-storage.mock';

import {ProfilePopperComponent} from './profile-popper.component';

describe('ProfilePopperComponent', () => {
    let component: ProfilePopperComponent;
    let fixture: ComponentFixture<ProfilePopperComponent>;
    let localStorageMock: LocalStorageMock;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ProfilePopperComponent],
            providers: [{provide: window, useValue: {location: {reload: jasmine.createSpy('reload')}}}],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ProfilePopperComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        localStorageMock = new LocalStorageMock();

        spyOn(localStorage, 'setItem').and.callFake(localStorageMock.setItem.bind(localStorageMock));
        spyOn(localStorage, 'getItem').and.callFake(localStorageMock.getItem.bind(localStorageMock));
        spyOn(localStorage, 'removeItem').and.callFake(localStorageMock.removeItem.bind(localStorageMock));
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
