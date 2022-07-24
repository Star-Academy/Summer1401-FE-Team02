import {AfterViewInit, Component, OnDestroy} from '@angular/core';
import {Ibanner} from 'src/app/interfaces/IBanner.interface';
import {BANNERS} from 'src/app/data/Banners';

@Component({
    selector: 'app-slide-show',
    templateUrl: './slide-show.component.html',
    styleUrls: ['./slide-show.component.scss'],
})
export class SlideShowComponent implements AfterViewInit, OnDestroy {
    private readonly INTERVAL_DELAY: number = 3000;
    public activeIndex: number = 0;

    private interval: number | null = null;

    public banners: Ibanner[] = BANNERS;

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

        this.interval = setInterval(() => {
            this.changeActiveIndex(this.activeIndex + 1);
        }, this.INTERVAL_DELAY);
    }
}
