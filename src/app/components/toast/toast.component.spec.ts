import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ToastType} from 'src/app/services/ToastType.enum';
import {ToastComponent} from './toast.component';

describe('ToastComponent', () => {
    let component: ToastComponent;
    let fixture: ComponentFixture<ToastComponent>;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ToastComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ToastComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show - default', () => {
        let message: string = 'message';
        component.show(message);
        testProperties(message, null);
    });

    it('should hide', () => {
        let click = new Event('click');
        host.querySelector('.toast__button')?.dispatchEvent(click);

        fixture.detectChanges();

        const toast = host.querySelector('.toast__container');
        expect(toast).toBeFalsy();

        expect(component.isVisible).toBeFalse();
        expect(component.message).toEqual('');
    });

    it('should show - info', () => {
        let message: string = 'message';
        let type: string = ToastType.INFO;
        component.show(message, type);
        testProperties(message, type);
    });

    const testProperties = (message: string, type: string | null): void => {
        fixture.detectChanges();

        testtoast(message, type);
        testtoastMessage(message);
        testtoastButton();
        testtoastButtonIcon();
    };

    const testtoast = (message: string, type: string | null): void => {
        const toast = host.querySelector('.toast__container');

        expect(toast).toBeTruthy();
        expect(toast?.classList).toContain(type || ToastType.WARNING);

        if (!!message) expect(component.isVisible).toBeTrue();
        else expect(component.isVisible).toBeFalse();
    };

    const testtoastMessage = (message: string): void => {
        const message_box = host.querySelector('.toast__container .toast__message');

        expect(message_box).toBeTruthy();
        if (!!message_box) expect(message_box?.textContent).toContain(message);
    };

    const testtoastButton = (): void => {
        const button = host.querySelector('.toast__container .toast__button');
        expect(button).toBeTruthy();
    };

    const testtoastButtonIcon = (): void => {
        const icon = host.querySelector('.toast__container button i');

        expect(icon).toBeTruthy();
        expect(icon?.className).toEqual('fa-solid fa-xmark');
    };
});
