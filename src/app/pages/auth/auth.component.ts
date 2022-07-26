import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from 'src/app/interfaces/User.interface';

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
    public constructor(private route: ActivatedRoute) {}

    public ngOnInit(): void {
        this.isLogin = this.route.routeConfig?.path?.startsWith('login');
    }

    public dispatchChange(input: string, name: string): void {
        console.log(input, name);
    }
}
