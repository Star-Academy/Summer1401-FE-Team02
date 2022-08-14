import {FilterPipe} from './filter.pipe';

describe('FilterPipe', () => {
    let pipe: FilterPipe;
    beforeEach(async () => {
        pipe = new FilterPipe();
    });

    it('should create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('should filter by searchphrase', () => {
        const items = ['red Dead redemption', 'walking deAd', 'papers, please'];
        const result = ['red Dead redemption', 'walking deAd'];
        const searchphrase = 'dead';

        expect(pipe.transform(items, searchphrase)).toEqual(result);
    });
});
