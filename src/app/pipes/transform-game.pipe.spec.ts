import {ToPostcardPipe} from './to-postcard.pipe';

describe('ToPostcardPipe', () => {
    it('create an instance', () => {
        const pipe = new ToPostcardPipe();
        expect(pipe).toBeTruthy();
    });
});
