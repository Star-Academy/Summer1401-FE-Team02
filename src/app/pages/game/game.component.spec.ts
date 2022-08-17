import {ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';
import {ActivatedRoute} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {GAMES} from 'src/app/data/Game.data';
import {ImageSrcPipe} from 'src/app/pipes/image-src.pipe';

import {GameComponent} from './game.component';

describe('GameComponent', () => {
    let component: GameComponent;
    let fixture: ComponentFixture<GameComponent>;
    let host: HTMLElement;
    let routeMock: any;

    beforeEach(async () => {
        routeMock = {snapshot: {params: {id: GAMES.games[0].id}}};
        await TestBed.configureTestingModule({
            declarations: [GameComponent, ImageSrcPipe],
            imports: [RouterTestingModule],
            providers: [{provide: ActivatedRoute, useValue: routeMock}],
        }).compileComponents();
    });

    beforeEach(fakeAsync(() => {
        fixture = TestBed.createComponent(GameComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
