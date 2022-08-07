import {Component} from '@angular/core';
import {NgxPopperjsPlacements} from 'ngx-popperjs';

@Component({
    selector: 'app-profile-popper',
    templateUrl: './profile-popper.component.html',
    styleUrls: ['./profile-popper.component.scss'],
})
export class ProfilePopperComponent {
    public NgxPopperjsPlacements = NgxPopperjsPlacements;
}
