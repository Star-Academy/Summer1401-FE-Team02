import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {GameService} from 'src/app/services/game.service';
import {Game} from 'src/app/interfaces/Game.interface';
import {getCoverSrc} from 'src/app/utils/game.utils';

@Component({
    selector: 'app-slide-show',
    templateUrl: './slide-show.component.html',
    styleUrls: ['./slide-show.component.scss'],
})
export class SlideShowComponent implements OnInit, AfterViewInit, OnDestroy {
    private readonly INTERVAL_DELAY: number = 6_000;
    public interval: number | null = null;

    public activeIndex: number = 0;
    public banners: Game[] = [];

    public getSrc = getCoverSrc;

    public constructor(public gameService: GameService) {}

    public async ngOnInit(): Promise<void> {
        this.banners = await this.gameService.getUpcoming();
    }

    public ngAfterViewInit(): void {
        this.resetInterval();
    }

    public ngOnDestroy(): void {
        if (this.interval !== null) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }

    public changeActiveIndex(index: number): void {
        if (index < 0) index = this.banners.length - 1;
        else if (index >= this.banners.length) index = 0;

        this.activeIndex = index;
        this.resetInterval();
    }

    private resetInterval(): void {
        if (this.interval !== null) clearInterval(this.interval);

        this.interval = window.setInterval(() => {
            this.changeActiveIndex(this.activeIndex + 1);
        }, this.INTERVAL_DELAY);
    }
}
