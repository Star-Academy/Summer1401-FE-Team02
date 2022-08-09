import {Component} from '@angular/core';
import {GameService} from 'src/app/services/game.service';
import {Sort} from 'src/app/enums/sort.enum';

@Component({
    selector: 'app-archive',
    templateUrl: './archive.component.html',
    styleUrls: ['./archive.component.scss'],
})
export class ArchiveComponent {
    public Sort = Sort;

    public constructor(public gameService: GameService) {}

    public handleSortClick(sortType: Sort): void {
        this.gameService.changeSort(sortType);
    }

    public handlePreviousPageButtonClick(): void {
        this.gameService.changePage(-1);
    }

    public handleNextPageButtonClick(): void {
        this.gameService.changePage(1);
    }
}
