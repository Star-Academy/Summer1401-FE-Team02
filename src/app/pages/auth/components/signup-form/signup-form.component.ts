import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {User} from 'src/app/interfaces/User.interface';
import {AuthService} from 'src/app/services/auth.service';
import {ToastService} from '../../../../services/toast.service';
import {ToastType} from '../../../../enums/ToastType.enum';

@Component({
    selector: 'app-signup-form',
    templateUrl: './signup-form.component.html',
    styleUrls: ['../../../../styles/form.scss'],
})
export class SignupFormComponent {
    public user: User = {
        username: '',
        password: '',
        email: '',
        firstName: '',
        lastName: '',
    };

    public constructor(public authService: AuthService, public router: Router, private toastService: ToastService) {}

    public async submitForm(): Promise<void> {
        const response = await this.authService.signup(this.user);
        if (response) {
            this.toastService.show('خوش آمدید!', ToastType.INFO);
        }
        response && (await this.router.navigateByUrl('/'));
    }

    public async cancel(): Promise<void> {
        await this.router.navigateByUrl('/');
    }
}
