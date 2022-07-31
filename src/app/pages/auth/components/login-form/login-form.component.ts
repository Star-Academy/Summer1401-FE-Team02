import {Component} from '@angular/core';
import {User} from 'src/app/interfaces/User.interface';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['../../auth.component.scss'],
})
export class LoginFormComponent {
    public user: Partial<User> = {
        username: '',
        password: '',
    };
}
