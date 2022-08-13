import {Injectable} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {ApiService} from './api.service';
import {GAME_GENRES, GAME_ONE, GAME_PLATFORMS, GAME_SEARCH} from '../utils/api.utils';
import {Sort} from '../enums/sort.enum';
import {Game, GameJson} from '../interfaces/Game.interface';
import {Platform} from '../interfaces/Platform.interface';
import {Genre} from '../interfaces/Genre.interface';
import {ExpansionListItem} from '../interfaces/ExpansionListItem.interface';
import {Filters} from '../interfaces/Filters.interface';

@Injectable({
    providedIn: 'root',
})
export class GameService {
    public readonly PAGE_SIZE: number = 20;

    public games: Game[] = [];
    public platforms: ExpansionListItem[] = [];
    public genres: ExpansionListItem[] = [];

    public searchPhrase: string = '';
    public offset: number = 0;
    public sort: Sort = Sort.TOP_SELLER;
    public onlyPublishedGames: boolean = false;
    public minimumRating: number | null = null;
    public maximumRating: number | null = null;

    public constructor(private router: Router, private apiService: ApiService) {
        this.initializePlatforms().then();
        this.initializeGenres().then();
        this.initializeObservers();

        console.log();
    }

    public async changeSort(sort: Sort): Promise<void> {
        this.offset = 0;
        this.sort = sort;
        await this.search();
    }

    public async changePage(multiplier: number): Promise<void> {
        this.offset += multiplier * this.PAGE_SIZE;
        if (this.offset < 0) this.offset = 0;

        await this.search();
    }

    public async search(): Promise<void> {
        this.games = [];
        const response = await this.apiService.post<{games: Game[]}>(GAME_SEARCH, {
            searchPhrase: this.searchPhrase,
            pageSize: this.PAGE_SIZE,
            offset: this.offset,
            sort: this.sort,
            filters: this.generateFilters(),
        });

        this.games = response && Array.isArray(response?.games) ? response.games : [];
    }

    public async navigate(): Promise<void> {
        this.offset = 0;

        if (!this.router.routerState.snapshot.url.startsWith('/games')) {
            await this.router.navigateByUrl('/games');
            return;
        }

        await this.search();
    }

    public async getGame(id: number): Promise<Game | null> {
        const game = await this.apiService.get<GameJson>(GAME_ONE + id, {}, true);
        if (game) {
            const data = game.game;
            return {
                id: data.id,
                cover: data.cover,
                releaseDate: data.releaseDate,
                genres: data.genres,
                name: data.name,
                platforms: data.platforms,
                rating: data.rating,
                ratingCount: data.ratingCount,
                screenshots: data.screenshots,
                storyline: data.storyline,
                summary: data.summary,
            };
        }
        return null;
    }

    private generateFilters(): Filters {
        return {
            status: this.onlyPublishedGames,
            platforms: this.platforms.filter((x) => x.isEnabled).map((x) => x.id),
            genres: this.genres.filter((x) => x.isEnabled).map((x) => x.id),
            minimumRating: this.minimumRating || undefined,
            maximumRating: this.maximumRating || undefined,
        };
    }

    private async initializePlatforms(): Promise<void> {
        const platforms = (await this.apiService.get<Platform[]>(GAME_PLATFORMS)) || [];
        this.platforms = platforms.map((x) => ({id: x.id, title: x.name, isEnabled: false}));
    }

    private async initializeGenres(): Promise<void> {
        const genres = (await this.apiService.get<Genre[]>(GAME_GENRES)) || [];
        this.genres = genres.map((x) => ({id: x.id, title: x.name, isEnabled: false}));
    }

    private initializeObservers(): void {
        this.router.events.subscribe(async (value) => {
            if (value instanceof NavigationEnd) {
                if (value.url.startsWith('/games')) await this.search();
            }
        });
    }
}
