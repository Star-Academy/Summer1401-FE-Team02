import {Component, OnInit} from '@angular/core';
import {AuthService} from 'src/app/services/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    public isLogged: boolean = false;
    public constructor(private authService: AuthService) {}

    public async ngOnInit(): Promise<void> {
        let isLogged = await this.authService.isLoggedIn();
    }
}
