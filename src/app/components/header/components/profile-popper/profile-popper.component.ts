import {Component} from '@angular/core';
import {NgxPopperjsPlacements} from 'ngx-popperjs';
import {AuthService} from 'src/app/services/auth.service';
import {ToastService} from '../../../../services/toast.service';
import {ToastType} from '../../../../enums/ToastType.enum';

@Component({
    selector: 'app-profile-popper',
    templateUrl: './profile-popper.component.html',
    styleUrls: ['./profile-popper.component.scss'],
})
export class ProfilePopperComponent {
    public NgxPopperjsPlacements = NgxPopperjsPlacements;

    public constructor(private authService: AuthService, private toastService: ToastService) {}

    public logout(): void {
        this.authService.logout();
        this.toastService.show('خدانگهدار!', ToastType.WARNING);
        window.location.reload();
    }
}
