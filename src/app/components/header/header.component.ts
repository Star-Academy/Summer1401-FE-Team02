import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {GameService} from 'src/app/services/game.service';
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    public isLoggedIn = false;

    public constructor(private authService: AuthService, public gameService: GameService) {}

    public async ngOnInit(): Promise<void> {
        this.isLoggedIn = await this.authService.isLoggedIn();
    }

    public async handleSearch(event: Event): Promise<void> {
        event.preventDefault();
        await this.gameService.navigate();
    }
}
