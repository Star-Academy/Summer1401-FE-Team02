import {Component} from '@angular/core';
import {games} from 'docs/app/models/Games';
import {Game} from 'docs/app/interfaces/Game.interface';

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
    public games: Game[] = games;
}
