import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    public isLogin: boolean | undefined = true;
    public constructor(private route: ActivatedRoute) {}

    public ngOnInit(): void {
        this.isLogin = this.route.routeConfig?.path?.startsWith('login');
    }

    public print(input: string): void {
        console.log(input);
    }
}
