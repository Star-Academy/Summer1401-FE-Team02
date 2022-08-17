import {HttpClientTestingModule} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {Sort} from '../enums/sort.enum';

import {GameService} from './game.service';
import {FetchMock} from '../mocks/fetch.mock';
import {GAMES} from '../data/Game.data';

describe('GameService', () => {
    let service: GameService;
    let fetchMock: FetchMock;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, HttpClientTestingModule],
        });
        service = TestBed.inject(GameService);
        fetchMock = new FetchMock();
        spyOn(window, 'fetch').and.callFake(fetchMock.fetch.bind(fetchMock));
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should change sort', () => {
        service.changeSort(Sort.MOST_POPULAR);
        expect(service.sort).toEqual(Sort.MOST_POPULAR);
    });

    it('should search games', async () => {
        await service.search();
        expect(service.games.length).toEqual(GAMES.games.length);
        expect(service.count).toEqual(GAMES.count);
    });

    it('should increase page', async () => {
        const offset = service.offset;
        await service.changePage(1);
        expect(service.offset).toEqual(offset + service.PAGE_SIZE);
    });
});
