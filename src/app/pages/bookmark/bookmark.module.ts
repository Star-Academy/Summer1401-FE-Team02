import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookmarkComponent} from './bookmark.component';
import {PostCardModule} from 'src/app/components/post-card/post-card.module';
import {ToPostcardPipeModule} from 'src/app/pipes/to-postcard-pipe.module';

@NgModule({
    declarations: [BookmarkComponent],
    imports: [CommonModule, PostCardModule, ToPostcardPipeModule],
})
export class BookmarkModule {}
