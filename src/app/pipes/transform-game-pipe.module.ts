import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TransformGamePipe} from './transform-game.pipe';

@NgModule({
    declarations: [TransformGamePipe],
    exports: [TransformGamePipe],
    imports: [CommonModule],
})
export class TransformGamePipeModule {}
