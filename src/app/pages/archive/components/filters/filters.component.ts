import {Component} from '@angular/core';
import {GameService} from 'src/app/services/game.service';

@Component({
    selector: 'app-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
    public constructor(public gameService: GameService) {}
}
