import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {User} from '../../interfaces/User.interface';
import {FormControl} from '@angular/forms';
import {IDatepickerTheme} from 'ng-persian-datepicker';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss', '../../styles/form.scss'],
})
export class ProfileComponent {
    public user: User = {
        username: this.authService.cachedUser?.username!,
        password: '',
        email: this.authService.cachedUser?.email!,
        firstName: this.authService.cachedUser?.firstName!,
        lastName: this.authService.cachedUser?.lastName!,
        phoneNumber: this.authService.cachedUser?.phoneNumber!,
        birthDate: this.authService.cachedUser?.birthDate!,
        gender: this.authService.cachedUser?.gender!,
    };

    public constructor(public authService: AuthService, public router: Router) {}

    public async cancel(): Promise<void> {
        await this.router.navigateByUrl('/');
    }

    public async submitChanges(): Promise<void> {
        const response = await this.authService.updateUser(this.user);
        response && (await this.router.navigateByUrl('/profile'));
    }

    public async logout(): Promise<void> {
        await this.authService.logout();
        await this.router.navigateByUrl('/');
    }
    public dateValue = new FormControl();

    public customTheme: Partial<IDatepickerTheme> = {
        background: 'var(--color-white-transparent)',
        hoverBackground: 'var(--main-theme-transparent)',
        disabledBackground: 'var(--color-gray-20)',
        selectedBackground: 'var(--main-theme)',
    };
}
