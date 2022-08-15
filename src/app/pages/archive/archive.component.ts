import {Component, OnInit} from '@angular/core';
import {GameService} from 'src/app/services/game.service';
import {Sort} from 'src/app/enums/sort.enum';
import {SORT} from 'src/app/data/Sort.data';
import {SortInfo} from 'src/app/interfaces/SortInfo.interface';

@Component({
    selector: 'app-archive',
    templateUrl: './archive.component.html',
    styleUrls: ['./archive.component.scss'],
})
export class ArchiveComponent implements OnInit {
    public sort: SortInfo[] = SORT;

    public constructor(public gameService: GameService) {}

    public ngOnInit(): void {
        this.gameService.search();
    }

    // public handleSortClick(sortType: Sort): void {
    //     this.gameService.changeSort(sortType);
    // }
}
