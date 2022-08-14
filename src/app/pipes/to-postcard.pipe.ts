import {Pipe, PipeTransform} from '@angular/core';
import {Game, GameCard} from 'src/app/interfaces/Game.interface';
import {getCoverSrc} from '../utils/game.utils';

@Pipe({
    name: 'toPostcard',
})
export class ToPostcardPipe implements PipeTransform {
    public transform(game: Game): GameCard {
        return {
            ...game,
            src: game.cover && getCoverSrc('cover_big', game.cover.id),
        };
    }
}
