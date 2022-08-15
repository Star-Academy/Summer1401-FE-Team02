import {AfterContentChecked, AfterViewInit, Component, Input, OnInit} from '@angular/core';
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
import {ChangePasswordData} from '../../interfaces/ChangePasswordData';
import * as moment from 'jalali-moment';

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
export class ProfileComponent implements AfterContentChecked {
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
    public userPasswordData: ChangePasswordData = {
        token: this.authService.token,
        currentPassword: '',
        newPassword: '',
    };
    public customTheme: Partial<IDatepickerTheme> = {
        background: 'var(--color-white-transparent)',
        hoverBackground: 'var(--main-theme-transparent)',
        disabledBackground: 'var(--color-gray-20)',
        selectedBackground: 'var(--main-theme)',
    };

    @Input() public oldPassword?: string;
    @Input() public newPassword?: string;
    @Input() public dateOfBirthInput?: string;

    public numberOfFavorites: number | string = '?';
    public numberOfWishlist: number | string = '?';
    public dateValue = new FormControl();

    public male = GenderEnum.MALE;
    public female = GenderEnum.FEMALE;

    public constructor(
        public authService: AuthService,
        public router: Router,
        public toastService: ToastService,
        public gameService: GameService
    ) {
        this.formatDateToReceive();
    }

    public ngAfterContentChecked(): void {
        this.hasImage = !!(this.initialUser.avatar !== '' && this.initialUser.avatar);
        this.setNumbers();
    }

    public async cancel(): Promise<void> {
        await this.router.navigateByUrl('/');
    }

    public async submitEditProfile(): Promise<void> {
        if (this.changingUser.gender === null) delete this.changingUser.gender;
        this.formatDateToSend();
        const response = await this.authService.updateUser(this.changingUser);
        response && this.toastService.show('ویرایش اطلاعات کاربر با موفقیت انجام شد.', ToastType.INFO);
        response && (await this.router.navigateByUrl('/'));
    }

    public async submitEditPassword(): Promise<void> {
        this.userPasswordData.currentPassword = this.oldPassword!;
        this.userPasswordData.newPassword = this.newPassword!;
        const response = await this.authService.updatePassword(this.userPasswordData);
        response && this.toastService.show('ویرایش رمز عبور با موفقیت انجام شد.', ToastType.INFO);
        response && (await this.router.navigateByUrl('/'));
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

    public formatDateToReceive(): void {
        if (this.initialUser.dateOfBirth && this.initialUser.dateOfBirth !== '') {
            this.dateOfBirthInput = moment(this.initialUser.dateOfBirth?.split('T')[0], 'YYYY-MM-DD')
                .locale('fa')
                .add(1, 'day')
                .format('YYYY/MM/DD');
        }
    }

    public formatDateToSend(): void {
        this.changingUser.dateOfBirth = moment.from(this.dateOfBirthInput!, 'fa', 'YYYY/MM/DD').format('YYYY-MM-DD');
    }
}
