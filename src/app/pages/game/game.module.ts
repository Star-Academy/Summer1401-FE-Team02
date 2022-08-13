import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GameComponent} from './game.component';
import {ImageSourcePipe} from './pipes/image-source.pipe';
import {HeaderModule} from 'src/app/components/header/header.module';
import {FooterModule} from 'src/app/components/footer/footer.module';

@NgModule({
    declarations: [GameComponent, ImageSourcePipe],
    imports: [CommonModule, HeaderModule, FooterModule],
    exports: [GameComponent],
})
export class GameModule {}
