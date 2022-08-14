import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToPostcardPipe} from './to-postcard.pipe';

@NgModule({
    declarations: [ToPostcardPipe],
    exports: [ToPostcardPipe],
    imports: [CommonModule],
})
export class ToPostcardPipeModule {}
