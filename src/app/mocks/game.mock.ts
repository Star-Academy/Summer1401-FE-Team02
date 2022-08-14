import {InjectionToken} from '@angular/core';
import * as urls from '../utils/api.utils';

export class GameMock {
    public async fetch(url: string, init?: RequestInit = {}): Promise<Response> {
        if (!init || init.method === 'GET') {
        } else if (init && init.body && init.method === 'POST') {
        }
    }
}
