import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {User} from 'src/app/interfaces/User.interface';
import {AuthService} from 'src/app/services/auth.service';

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

    public constructor(public authService: AuthService, public router: Router) {}

    public async submitForm(): Promise<void> {
        const response = await this.authService.signup(this.user);
        response && (await this.router.navigateByUrl('/'));
    }

    public async cancel(): Promise<void> {
        await this.router.navigateByUrl('/');
    }
}
