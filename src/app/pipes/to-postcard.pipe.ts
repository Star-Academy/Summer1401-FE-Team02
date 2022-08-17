import {Pipe, PipeTransform} from '@angular/core';
import {Game, GameCard} from 'src/app/interfaces/Game.interface';

@Pipe({
    name: 'toPostcard',
})
export class ToPostcardPipe implements PipeTransform {
    public transform(game: Game): GameCard {
        return {
            ...game,
            src: game.cover && `https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover.id}.jpg`,
        };
    }
}
