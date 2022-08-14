import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Game, GameImage} from 'src/app/interfaces/Game.interface';
import {GameService} from 'src/app/services/game.service';
import {getCoverSrc} from 'src/app/utils/game.utils';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
    public constructor(private route: ActivatedRoute, public gameService: GameService) {}

    public imageSource = getCoverSrc;

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

    public async ngOnInit(): Promise<void> {
        const id = this.route.snapshot.params.id;
        const game = await this.gameService.getGame(id);
        if (game) {
            this.data = game;
            if (game.rating) this.gameRate = game.rating / 20;
            if (game.genres) this.genres = game.genres.map((genre) => JSON.parse(JSON.stringify(genre)).name);
            if (game.platforms)
                this.platforms = game.platforms.map((platform) => JSON.parse(JSON.stringify(platform)).name);
            if (game.screenshots) this.selectedImage = game.screenshots[0];
        }
    }
    // @ts-ignore
    public selectedImage: GameImage | null = this.data.screenshots[0];
    public setLargeImage(screenshot: GameImage): void {
        this.selectedImage = screenshot;
    }
}
