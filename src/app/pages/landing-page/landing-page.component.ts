import {Component} from '@angular/core';
import {GAMES} from 'src/app/data/Games';
import {Game} from 'src/app/interfaces/Game.interface';

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
    public games: Game[] = GAMES;
}
