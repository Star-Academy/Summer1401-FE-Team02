import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
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
    };
    public constructor(private route: ActivatedRoute, private authService: AuthService) {}

    public ngOnInit(): void {
        this.isLogin = this.route.routeConfig?.path?.startsWith('login');
    }

    public async submitForm(): Promise<void> {
        let response = await (this.isLogin ? this.authService.login(this.user) : this.authService.register(this.user));
    }
}
