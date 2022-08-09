import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PostCardComponent} from './post-card.component';
import {Game, GameCard} from '../../interfaces/Game.interface';

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
        const testedGame: GameCard = {
            name: 'FlatOut',
            summary: 'یک مسابقه ماشین سواری پرهیجان با گرافیک شگفت‌انگیر و دستانی نوآوورانه',
            cover: {
                id: 'https://cdn1.epicgames.com/spt-assets/c5ec8913ad38441b82a36c603be63e3a/download-flatout-offer-ogxv1.png?h=854&resize=1&w=360',
                width: 360,
                height: 854,
            },
        };

        component.game = testedGame;
        fixture.detectChanges();

        const titleContainer = host.querySelector('.card__title')!;
        const descContainer = host.querySelector('.card__desc')!;
        const imageContainer = host.querySelector('.card__img')!.getAttribute('src');

        expect(titleContainer.textContent).toEqual(testedGame.name);
        expect(descContainer.textContent).toEqual(testedGame.summary!);
        expect(imageContainer).toEqual(testedGame.cover?.id!);
    });
});
