import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    public isLoggedIn = false;

    public constructor(private authService: AuthService) {}

    public async ngOnInit(): Promise<void> {
        this.isLoggedIn = await this.authService.isLoggedIn();
    }
}
