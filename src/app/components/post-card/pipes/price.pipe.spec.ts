import {PricePipe} from './price.pipe';

describe('CurrencyPipe', () => {
    it('create an instance', () => {
        const pipe = new PricePipe();
        expect(pipe).toBeTruthy();
    });
});
