import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
    public isLogin: boolean | undefined = true;

    public constructor(private route: ActivatedRoute) {}

    public ngOnInit(): void {
        this.isLogin = this.route.routeConfig?.path?.startsWith('login');
    }
}
