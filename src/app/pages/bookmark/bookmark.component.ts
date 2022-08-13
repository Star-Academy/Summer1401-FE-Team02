import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Game} from 'src/app/interfaces/Game.interface';
import {GameService} from 'src/app/services/game.service';

@Component({
    selector: 'app-bookmark',
    templateUrl: './bookmark.component.html',
    styleUrls: ['./bookmark.component.scss'],
})
export class BookmarkComponent implements OnInit {
    public list: Game[] = [];
    public constructor(private route: ActivatedRoute, private gameService: GameService) {}

    public ngOnInit(): void {
        this.list = this.route.routeConfig?.path?.startsWith('wishlist')
            ? this.gameService.wishlist
            : this.gameService.favorites;
    }
}
