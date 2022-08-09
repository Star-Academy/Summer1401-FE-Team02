import {Pipe, PipeTransform} from '@angular/core';
import {Game, GameCard} from 'src/app/interfaces/Game.interface';

@Pipe({
    name: 'transformGame',
})
export class TransformGamePipe implements PipeTransform {
    public transform(game: Game): GameCard {
        return {
            name: game.name,
            summary: game.summary,
            cover: game.cover,
        };
    }
}
