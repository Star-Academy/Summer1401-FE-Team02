import {Component} from '@angular/core';
import {User} from 'src/app/interfaces/User.interface';

@Component({
    selector: 'app-signup-form',
    templateUrl: './signup-form.component.html',
    styleUrls: ['../../auth.component.scss'],
})
export class SignupFormComponent {
    public user: User = {
        username: '',
        password: '',
        email: '',
        firstName: '',
        lastName: '',
    };
}
