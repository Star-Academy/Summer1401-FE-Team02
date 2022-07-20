import {Component} from '@angular/core';
import {games} from 'src/app/models/Games';
import {Game} from 'src/app/interfaces/Game.interface';

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
    public games: Game[] = games;
}
