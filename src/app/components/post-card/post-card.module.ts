import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostCardComponent} from './post-card.component';
import {PricePipe} from './pipes/price.pipe';

@NgModule({
    declarations: [PostCardComponent, PricePipe],
    imports: [CommonModule],
})
export class PostCardModule {}
