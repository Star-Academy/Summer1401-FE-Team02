import {Component} from '@angular/core';
import {NgxPopperjsPlacements} from 'ngx-popperjs';
import {AuthService} from 'src/app/services/auth.service';

@Component({
    selector: 'app-profile-popper',
    templateUrl: './profile-popper.component.html',
    styleUrls: ['./profile-popper.component.scss'],
})
export class ProfilePopperComponent {
    public NgxPopperjsPlacements = NgxPopperjsPlacements;

    public constructor(private authService: AuthService) {}

    public logout(): void {
        this.authService.logout();
        window.location.reload();
    }
}
