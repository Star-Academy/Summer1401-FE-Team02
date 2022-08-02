import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {LoginUserData} from 'src/app/interfaces/LoginUserData.interface';
import {AuthService} from 'src/app/services/auth.service';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['../../../../styles/form.scss'],
})
export class LoginFormComponent {
    public user: LoginUserData = {
        username: '',
        password: '',
    };

    public constructor(private authService: AuthService, private router: Router) {}

    public async submitForm(): Promise<void> {
        const response = await this.authService.login(this.user);
        response && this.router.navigateByUrl('/');
    }

    public async cancel(): Promise<void> {
        await this.router.navigateByUrl('/');
    }
}
