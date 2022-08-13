import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookmarkComponent} from './bookmark.component';
import {PostCardModule} from 'src/app/components/post-card/post-card.module';
import {TransformGamePipeModule} from 'src/app/pipes/transform-game-pipe.module';

@NgModule({
    declarations: [BookmarkComponent],
    imports: [CommonModule, PostCardModule, TransformGamePipeModule],
})
export class BookmarkModule {}
