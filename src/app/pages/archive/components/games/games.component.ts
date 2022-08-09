import {Component} from '@angular/core';
import {GameService} from 'src/app/services/game.service';

@Component({
    selector: 'app-games',
    templateUrl: './games.component.html',
    styleUrls: ['./games.component.scss'],
})
export class GamesComponent {
    public constructor(public gameService: GameService) {}
}
