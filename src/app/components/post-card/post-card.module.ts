import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostCardComponent} from './post-card.component';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [PostCardComponent],
    exports: [PostCardComponent],
    imports: [CommonModule, RouterModule],
})
export class PostCardModule {}
