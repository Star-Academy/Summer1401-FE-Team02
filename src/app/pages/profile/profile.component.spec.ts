import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {FetchMock, VALID_USER_LOGIN_DATA} from 'src/app/mocks/fetch.mock';
import {LocalStorageMock} from 'src/app/mocks/local-storage.mock';
import {ToastServiceMock} from 'src/app/mocks/toast.mock';
import {ToastService} from 'src/app/services/toast.service';

import {ProfileComponent} from './profile.component';

describe('ProfileComponent', () => {
    let component: ProfileComponent;
    let fixture: ComponentFixture<ProfileComponent>;
    let host: HTMLElement;
    let localStorageMock: LocalStorageMock;
    let fetchMock: FetchMock;
    let toastMock: ToastServiceMock;

    beforeEach(async () => {
        toastMock = new ToastServiceMock();
        await TestBed.configureTestingModule({
            declarations: [ProfileComponent],
            imports: [RouterTestingModule],
            providers: [{provide: ToastService, useValue: toastMock}],
        }).compileComponents();

        fetchMock = new FetchMock();
        spyOn(window, 'fetch').and.callFake(fetchMock.fetch.bind(fetchMock));

        localStorageMock = new LocalStorageMock();
        spyOn(localStorage, 'setItem').and.callFake(localStorageMock.setItem.bind(localStorageMock));
        spyOn(localStorage, 'getItem').and.callFake(localStorageMock.getItem.bind(localStorageMock));
        spyOn(localStorage, 'removeItem').and.callFake(localStorageMock.removeItem.bind(localStorageMock));
    });

    beforeEach(async () => {
        fixture = TestBed.createComponent(ProfileComponent);
        component = fixture.componentInstance;
        await component.authService.login(VALID_USER_LOGIN_DATA);
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show success', async () => {
        await component.submitEditProfile();
        fixture.detectChanges();
        expect(toastMock.message).toEqual('ویرایش اطلاعات کاربر با موفقیت انجام شد.');
    });

    it('should call event handler', () => {
        spyOn(component, 'toFilesBase64');
        const input = host.querySelector('input[type="file"]') as HTMLInputElement;
        input.dispatchEvent(new Event('change'));
        fixture.detectChanges();
        expect(component.toFilesBase64).toHaveBeenCalled();
    });

    it('should remove image', () => {
        component.removeImage();
        fixture.detectChanges();
        expect(component.changingUser.avatar).toBeFalsy();
        expect(component.hasImage).toBeFalse();
    });
});
