import {Component, OnInit} from '@angular/core';
import {GameCard} from 'src/app/interfaces/Game.interface';
import {GameService} from 'src/app/services/game.service';

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
    public games: GameCard[] = [];

    public constructor(private gameService: GameService) {}

    public async ngOnInit(): Promise<void> {
        this.games = await this.gameService.getTopSellers();
    }
}
