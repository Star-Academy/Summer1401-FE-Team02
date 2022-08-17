import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Game, GameImage} from 'src/app/interfaces/Game.interface';
import {GameService} from 'src/app/services/game.service';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
    public oneToFive: number[];
    public constructor(private route: ActivatedRoute, public gameService: GameService) {
        this.oneToFive = Array(5)
            .fill(0)
            .map((x, i) => i);
    }

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

    public gameRate: number = 0;
    public genres: string[] = [];
    public platforms: string[] = [];
    public selectedImage: GameImage | null = this.data.screenshots?.[0] || null;

    public async ngOnInit(): Promise<void> {
        const id = this.route.snapshot.params.id;
        const game = await this.gameService.getGame(id);
        if (!game) {
            return;
        }
        this.data = game;
        this.gameRate = game.rating ? game.rating / 20 : 0;
        this.genres = game.genres.map((genre) => JSON.parse(JSON.stringify(genre)).name);
        this.platforms = game.platforms.map((platform) => JSON.parse(JSON.stringify(platform)).name);
        this.selectedImage = game.screenshots ? game.screenshots[0] : null;
    }
}
