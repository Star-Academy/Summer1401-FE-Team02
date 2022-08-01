import {TestBed} from '@angular/core/testing';
import {ToastComponent} from '../components/toast/toast.component';
import {ToastService} from './toast.service';

describe('SnackbarService', () => {
    let service: ToastService;
    let toastComponentSpy: jasmine.SpyObj<ToastComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ToastService);
        toastComponentSpy = jasmine.createSpyObj<ToastComponent>('ToastComponent', ['show']);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('tests show', () => {
        service.setComponent(toastComponentSpy);
        service.show('this is a message');
        expect(toastComponentSpy.show.calls.count()).toBe(1);
    });
});
