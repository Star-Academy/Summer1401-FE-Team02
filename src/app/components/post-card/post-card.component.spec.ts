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
        const testedGame: Game = {
            title: 'FlatOut',
            description: 'یک مسابقه ماشین سواری پرهیجان با گرافیک شگفت‌انگیر و دستانی نوآوورانه',
            price: 25_000,
            poster: 'https://cdn1.epicgames.com/spt-assets/c5ec8913ad38441b82a36c603be63e3a/download-flatout-offer-ogxv1.png?h=854&resize=1&w=360',
        };

        component.game = testedGame;
        fixture.detectChanges();

        const titleContainer = host.querySelector('.card__title')!;
        const priceContainer = host.querySelector('.card__price')!;
        const descContainer = host.querySelector('.card__desc')!;
        const imageContainer = host.querySelector('.card__img')!.getAttribute('src');

        expect(titleContainer.textContent).toEqual(testedGame.title);
        expect(priceContainer.textContent!.split(' ')[0]).toEqual(testedGame.price.toLocaleString());
        expect(descContainer.textContent).toEqual(testedGame.description);
        expect(imageContainer).toEqual(testedGame.poster);
    });
});
