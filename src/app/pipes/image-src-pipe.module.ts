import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImageSrcPipe} from './image-src.pipe';

@NgModule({
    declarations: [ImageSrcPipe],
    exports: [ImageSrcPipe],
    imports: [CommonModule],
})
export class ImageSrcPipeModule {}
