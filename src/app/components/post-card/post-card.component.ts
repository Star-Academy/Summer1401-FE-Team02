import {Component, Input} from '@angular/core';
import {GameCard} from 'src/app/interfaces/Game.interface';

@Component({
    selector: 'app-post-card',
    templateUrl: './post-card.component.html',
    styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent {
    @Input() public game: GameCard = {id: 0, rating: null, name: '', src: undefined, summary: ''};
}
