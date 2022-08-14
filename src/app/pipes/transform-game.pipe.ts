import {Pipe, PipeTransform} from '@angular/core';
import {Game, GameCard} from 'src/app/interfaces/Game.interface';
import {getCoverSrc} from '../utils/game.utils';

@Pipe({
    name: 'transformGame',
})
export class TransformGamePipe implements PipeTransform {
    public transform(game: Game): GameCard {
        return {
            ...game,
            src: game.cover && getCoverSrc(game.cover.id),
        };
    }
}
