import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Game} from 'src/app/interfaces/Game.interface';
import {GameService} from 'src/app/services/game.service';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
    public constructor(private route: ActivatedRoute, private gameService: GameService) {}

    public data: Game = {
        id: 0,
        cover: undefined,
        releaseDate: null,
        genres: [],
        name: '',
        platforms: [],
        rating: null,
        ratingCount: undefined,
        screenshots: [],
        storyline: '',
        summary: '',
    };

    public async ngOnInit(): Promise<void> {
        const id = this.route.snapshot.params.id;
        const game = await this.gameService.getGame(25076);
        if (game) {
            this.data = game;
        }
    }
}
