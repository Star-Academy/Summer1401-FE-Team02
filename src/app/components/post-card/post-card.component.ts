import {Component, Input} from '@angular/core';
import {GameCard} from 'src/app/interfaces/Game.interface';
import {GameService} from 'src/app/services/game.service';

@Component({
    selector: 'app-post-card',
    templateUrl: './post-card.component.html',
    styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent {
    @Input() public game: GameCard = {id: 0, rating: null, name: '', src: undefined, summary: ''};

    public constructor(public gameService: GameService) {}
}
