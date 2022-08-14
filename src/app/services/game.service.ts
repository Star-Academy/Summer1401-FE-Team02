import {Injectable} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {ApiService} from './api.service';
import * as apiUtils from '../utils/api.utils';
import {Sort} from '../enums/sort.enum';
import {Game} from '../interfaces/Game.interface';
import {ExpansionListItem} from '../interfaces/ExpansionListItem.interface';
import {Filters} from '../interfaces/Filters.interface';
import {FilterData} from '../interfaces/FilterData.interface';

@Injectable({
    providedIn: 'root',
})
export class GameService {
    public readonly PAGE_SIZE: number = 20;

    public games: Game[] = [];
    public count: number = 0;
    public wishlist: Game[] = [];
    public favorites: Game[] = [];

    public platforms: ExpansionListItem[] = [];
    public genres: ExpansionListItem[] = [];
    public gameModes: ExpansionListItem[] = [];
    public gamePrespectives: ExpansionListItem[] = [];

    public searchPhrase: string = '';
    public offset: number = 0;
    public sort: Sort = Sort.TOP_SELLER;
    public onlyPublishedGames: boolean = false;
    public minimumRating: number | null = null;
    public maximumRating: number | null = null;

    public constructor(private router: Router, private apiService: ApiService) {
        this.initializePlatforms().then();
        this.initializeGenres().then();
        this.initializeGameModes().then();
        this.initializeGamePrespectives().then();
        this.getFavorites().then();
        this.getWishlist().then();
        this.initializeObservers();
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
        const response = await this.apiService.post<{games: Game[]; count: number}>(apiUtils.GAME_SEARCH, {
            searchPhrase: this.searchPhrase,
            pageSize: this.PAGE_SIZE,
            offset: this.offset,
            sort: this.sort,
            filters: this.generateFilters(),
        });

        this.games = response && Array.isArray(response?.games) ? response.games : [];
        this.count = response && response.count ? response.count : 0;
    }

    public async navigate(): Promise<void> {
        this.offset = 0;

        if (!this.router.routerState.snapshot.url.startsWith('/games')) {
            await this.router.navigateByUrl('/games');
            return;
        }

        await this.search();
    }

    public async getTopSellers(): Promise<Game[]> {
        const response = await this.apiService.post<{games: Game[]}>(apiUtils.GAME_SEARCH, {
            searchPhrase: '',
            pageSize: 10,
            offset: 0,
            sort: Sort.TOP_SELLER,
            filters: {},
        });

        return response && Array.isArray(response?.games) ? response.games : [];
    }

    public async getUpcoming(): Promise<Game[]> {
        let response = await this.apiService.get<{games: Game[]}>(apiUtils.GAME_UPCOMING);
        return response && Array.isArray(response?.games) ? response.games : [];
    }

    public async getGame(id: number): Promise<Game | null> {
        const game = await this.apiService.get<{game: Game}>(apiUtils.GAME_ONE + id, {}, true);
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

    public async addToWishlist(id: number): Promise<void> {
        const response = await this.apiService.post(
            apiUtils.WISHLIST_ADD,
            {
                token: localStorage.getItem('token'),
                gameId: id,
            },
            {},
            true
        );
        await this.getWishlist();
    }

    public async removeFromWishlist(id: number): Promise<void> {
        const response = await this.apiService.delete(
            apiUtils.WISHLIST_REMOVE,
            {
                token: localStorage.getItem('token'),
                gameId: id,
            },
            {},
            true
        );
        await this.getWishlist();
    }

    public isInWishlist(id: number): boolean {
        return !!this.wishlist.find((game) => game.id === id);
    }

    public async addToFavorites(id: number): Promise<void> {
        const response = await this.apiService.post(
            apiUtils.FAVORITES_ADD,
            {
                token: localStorage.getItem('token'),
                gameId: id,
            },
            {},
            true
        );
        await this.getFavorites();
    }

    public async removeFromFavorites(id: number): Promise<void> {
        const response = await this.apiService.delete(
            apiUtils.FAVORITES_REMOVE,
            {
                token: localStorage.getItem('token'),
                gameId: id,
            },
            {},
            true
        );
        await this.getFavorites();
    }

    public isInFavorites(id: number): boolean {
        return !!this.favorites.find((game) => game.id === id);
    }

    private generateFilters(): Filters {
        return {
            status: this.onlyPublishedGames,
            platforms: this.platforms.filter((x) => x.isEnabled).map((x) => x.id),
            genres: this.genres.filter((x) => x.isEnabled).map((x) => x.id),
            'game-modes': this.gameModes.filter((x) => x.isEnabled).map((x) => x.id),
            'player-perspectives': this.gamePrespectives.filter((x) => x.isEnabled).map((x) => x.id),
            minimumRating: this.minimumRating || undefined,
            maximumRating: this.maximumRating || undefined,
        };
    }

    private async initializePlatforms(): Promise<void> {
        const platforms = (await this.apiService.get<FilterData[]>(apiUtils.GAME_PLATFORMS)) || [];
        this.platforms = platforms.map((x) => ({id: x.id, title: x.name, isEnabled: false}));
    }

    private async initializeGenres(): Promise<void> {
        const genres = (await this.apiService.get<FilterData[]>(apiUtils.GAME_GENRES)) || [];
        this.genres = genres.map((x) => ({id: x.id, title: x.name, isEnabled: false}));
    }

    private async initializeGameModes(): Promise<void> {
        const gameModes = (await this.apiService.get<FilterData[]>(apiUtils.GAME_MODES)) || [];
        this.gameModes = gameModes.map((x) => ({id: x.id, title: x.name, isEnabled: false}));
    }

    private async initializeGamePrespectives(): Promise<void> {
        const gamePrespectives = (await this.apiService.get<FilterData[]>(apiUtils.GAME_PERSPECTIVES)) || [];
        this.gamePrespectives = gamePrespectives.map((x) => ({id: x.id, title: x.name, isEnabled: false}));
    }

    private initializeObservers(): void {
        this.router.events.subscribe(async (value) => {
            if (value instanceof NavigationEnd) {
                if (value.url.startsWith('/games')) await this.search();
            }
        });
    }

    private async getWishlist(): Promise<void> {
        const response = await this.apiService.post<{games: Game[]}>(
            apiUtils.WISHLIST_ALL,
            {
                token: localStorage.getItem('token'),
            },
            {},
            true
        );

        this.wishlist = response && Array.isArray(response?.games) ? response.games : [];
    }

    public async getNumberOfWishlist(): Promise<number> {
        await this.getWishlist();
        return this.wishlist.length;
    }

    private async getFavorites(): Promise<void> {
        const response = await this.apiService.post<{games: Game[]}>(
            apiUtils.FAVORITES_ALL,
            {
                token: localStorage.getItem('token'),
            },
            {},
            true
        );

        this.favorites = response && Array.isArray(response?.games) ? response.games : [];
    }

    public async getNumberOfFavorites(): Promise<number> {
        await this.getFavorites();
        return this.favorites.length;
    }
}
