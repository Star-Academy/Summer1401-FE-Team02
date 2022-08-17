import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GameComponent} from './game.component';
import {HeaderModule} from 'src/app/components/header/header.module';
import {FooterModule} from 'src/app/components/footer/footer.module';
import {ImageSrcPipeModule} from 'src/app/pipes/image-src-pipe.module';

@NgModule({
    declarations: [GameComponent],
    imports: [CommonModule, HeaderModule, FooterModule, ImageSrcPipeModule],
    exports: [GameComponent],
})
export class GameModule {}
