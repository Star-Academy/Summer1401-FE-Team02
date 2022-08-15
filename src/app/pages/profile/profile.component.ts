import {AfterContentChecked, Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {User} from '../../interfaces/User.interface';
import {FormControl} from '@angular/forms';
import {IActiveDate, IDatepickerTheme} from 'ng-persian-datepicker';
import {ToastType} from '../../enums/ToastType.enum';
import {ToastService} from '../../services/toast.service';
import {AsyncSubject, Observable} from 'rxjs';
import {GameService} from '../../services/game.service';
import {GenderEnum} from '../../enums/gender.enum';

export interface SelectedFiles {
    name: string;
    file: any;
    base64?: string;
}
@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss', '../../styles/form.scss'],
})
export class ProfileComponent {
    public initialUser: Partial<User> = {
        username: this.authService.cachedUser?.username!,
        email: this.authService.cachedUser?.email!,
        firstName: this.authService.cachedUser?.firstName!,
        lastName: this.authService.cachedUser?.lastName!,
        phone: this.authService.cachedUser?.phone,
        dateOfBirth: this.authService.cachedUser?.dateOfBirth,
        gender: this.authService.cachedUser?.gender,
        avatar: this.authService.cachedUser?.avatar,
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
        avatar: this.authService.cachedUser?.avatar,
    };
    public customTheme: Partial<IDatepickerTheme> = {
        background: 'var(--color-white-transparent)',
        hoverBackground: 'var(--main-theme-transparent)',
        disabledBackground: 'var(--color-gray-20)',
        selectedBackground: 'var(--main-theme)',
    };

    @Input() public oldPassword?: string;
    @Input() public newPassword?: string;
    @Input() public repeatedPassword?: string;

    public numberOfFavorites: number = 0;
    public numberOfWishlist: number = 0;
    public dateValue = new FormControl();

    public male = GenderEnum.MALE;
    public female = GenderEnum.FEMALE;

    public constructor(
        public authService: AuthService,
        public router: Router,
        public toastService: ToastService,
        public gameService: GameService
    ) {
        this.hasImage = !!(this.initialUser.avatar !== '' && this.initialUser.avatar);
        this.setNumbers();
    }

    public async cancel(): Promise<void> {
        await this.router.navigateByUrl('/');
    }

    public async submitChanges(): Promise<void> {
        if (this.changingUser.gender === null) delete this.changingUser.gender;
        if (
            this.oldPassword &&
            !(await this.authService.login({username: this.initialUser.username!, password: this.oldPassword!}))
        ) {
            this.toastService.show('رمز عبور کنونی اشتباه است.', ToastType.WARNING);
            return;
        }
        if (this.newPassword !== this.repeatedPassword) {
            this.toastService.show('رمز عبور و تکرار آن یکسان نمی‌باشند.', ToastType.WARNING);
            return;
        }
        this.changingUser.password = this.newPassword;
        const response = await this.authService.updateUser(this.changingUser);

        response && this.toastService.show('ویرایش اطلاعات کاربر با موفقیت انجام شد.', ToastType.INFO);
        response && (await this.router.navigateByUrl('/'));
    }

    public async logout(): Promise<void> {
        await this.authService.logout();
        await this.router.navigateByUrl('/');
    }

    public getDateOfBirth(): string {
        return this.changingUser.dateOfBirth!;
    }

    public selectedFiles: SelectedFiles[] = [];
    public hasImage: boolean = false;

    public toFilesBase64(files: FileList, selectedFiles: SelectedFiles[]): Observable<SelectedFiles[]> {
        const result = new AsyncSubject<SelectedFiles[]>();
        if (files?.length) {
            Object.keys(files)?.forEach(async (file, i) => {
                const reader = new FileReader();
                reader.readAsDataURL(files[i]);
                reader.onload = (e): void => {
                    selectedFiles = selectedFiles?.filter((f) => f?.name !== files[i]?.name);
                    selectedFiles.push({name: files[i]?.name, file: files[i], base64: reader?.result as string});
                    result.next(selectedFiles);
                    if (files?.length === i + 1) {
                        result.complete();
                        this.hasImage = true;
                        this.changingUser.avatar = selectedFiles[0].base64;
                    }
                };
            });
            return result;
        } else {
            result.next([]);
            result.complete();
            return result;
        }
    }

    public onFileSelected(files: FileList | null): void {
        this.selectedFiles = [];
        this.toFilesBase64(files!, this.selectedFiles).subscribe((res: SelectedFiles[]) => {
            this.selectedFiles = res;
        });
    }

    public removeImage(): void {
        this.hasImage = false;
        this.changingUser.avatar = '';
        this.selectedFiles = [];
    }

    public setNumbers(): void {
        this.numberOfFavorites = this.gameService.favorites.length;
        this.numberOfWishlist = this.gameService.wishlist.length;
    }
}
