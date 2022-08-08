import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';
import {User} from '../../../interfaces/User.interface';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss', '../../../styles/form.scss'],
})
export class ProfileComponent {
    public user: User = {
        username: '',
        password: '',
        email: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        birthDate: '',
        gender: true,
    };

    public constructor(public authService: AuthService, public router: Router) {}

    public async saveChanges(): Promise<void> {
        const response = await this.authService.saveChanges(this.user);
        response && (await this.router.navigateByUrl('/'));
    }

    public async cancel(): Promise<void> {
        await this.router.navigateByUrl('/');
    }

    public async logout(): Promise<void> {
        await this.authService.logout();
        await this.router.navigateByUrl('/');
    }
}
