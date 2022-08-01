import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PostCardComponent} from './post-card.component';
import {Game} from '../../interfaces/Game.interface';

describe('PostCardComponent', () => {
    let component: PostCardComponent;
    let fixture: ComponentFixture<PostCardComponent>;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PostCardComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PostCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render game data', () => {
        const tested_game: Game = {
            title: 'FlatOut',
            description: 'یک مسابقه ماشین سواری پرهیجان با گرافیک شگفت‌انگیر و دستانی نوآوورانه',
            price: 25_000,
            poster: 'https://cdn1.epicgames.com/spt-assets/c5ec8913ad38441b82a36c603be63e3a/download-flatout-offer-ogxv1.png?h=854&resize=1&w=360',
        };

        component.game = tested_game;
        fixture.detectChanges();

        const title_container = host.querySelector('.card__title')!;
        const price_container = host.querySelector('.card__price')!;
        const desc_container = host.querySelector('.card__desc')!;
        const image_container = host.querySelector('.card__img')!.getAttribute('src');

        expect(title_container.textContent).toEqual(tested_game.title);
        expect(price_container.textContent!.split(' ')[0]).toEqual(tested_game.price.toLocaleString());
        expect(desc_container.textContent).toEqual(tested_game.description);
        expect(image_container).toEqual(tested_game.poster);
    });
});
