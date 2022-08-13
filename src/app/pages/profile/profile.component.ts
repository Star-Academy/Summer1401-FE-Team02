import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {User} from '../../interfaces/User.interface';
import {FormControl} from '@angular/forms';
import {IDatepickerTheme} from 'ng-persian-datepicker';
import {Error} from '../../interfaces/Error.interface';
import {ToastType} from '../../enums/ToastType.enum';
import {ToastService} from '../../services/toast.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss', '../../styles/form.scss'],
})
export class ProfileComponent {
    public initialUser: Partial<User> = {
        username: this.authService.cachedUser?.username!,
        password: this.authService.cachedUser?.password!,
        email: this.authService.cachedUser?.email!,
        firstName: this.authService.cachedUser?.firstName!,
        lastName: this.authService.cachedUser?.lastName!,
        phone: this.authService.cachedUser?.phone,
        dateOfBirth: this.authService.cachedUser?.dateOfBirth,
        gender: this.authService.cachedUser?.gender,
    };
    public changingUser: Partial<User> = {
        token: this.authService.token,
        username: this.authService.cachedUser?.username!,
        email: this.authService.cachedUser?.email!,
        firstName: this.authService.cachedUser?.firstName!,
        lastName: this.authService.cachedUser?.lastName!,
        phone: this.authService.cachedUser?.phone,
        dateOfBirth: this.authService.cachedUser?.dateOfBirth,
        gender: this.authService.cachedUser?.gender,
    };

    public constructor(public authService: AuthService, public router: Router, public toastService: ToastService) {}

    public async cancel(): Promise<void> {
        await this.router.navigateByUrl('/');
    }

    public async submitChanges(): Promise<void> {
        if (this.changingUser.gender === null) delete this.changingUser.gender;
        const response = await this.authService.updateUser(this.changingUser);
        response && this.toastService.show('ویرایش اطلاعات کاربر با موفقیت انجام شد.', ToastType.INFO);
        response && (await this.router.navigateByUrl('/'));
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

    public getDateOfBirth(): string {
        return this.changingUser.dateOfBirth!;
    }
}
