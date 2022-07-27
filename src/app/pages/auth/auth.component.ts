import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from 'src/app/interfaces/User.interface';
import {AuthService} from 'src/app/services/auth.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
    public isLogin: boolean | undefined = true;
    public user: User = {
        username: '',
        password: '',
        email: '',
        firstName: '',
        lastName: '',
    };

    public constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService) {}

    public ngOnInit(): void {
        this.isLogin = this.route.routeConfig?.path?.startsWith('login');
    }

    public async submitForm(): Promise<void> {
        const partialUser: Partial<User> = {
            username: this.user.username,
            password: this.user.password,
        };

        const response = await (this.isLogin
            ? this.authService.login(partialUser)
            : this.authService.signup(this.user));

        if (response) await this.router.navigateByUrl('/');
    }

    public async cancel(): Promise<void> {
        await this.router.navigateByUrl('/');
    }
}
