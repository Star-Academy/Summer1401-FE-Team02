import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FiltersComponent} from './components/filters/filters.component';
import {ExpansionListComponent} from './components/expansion-list/expansion-list.component';
import {FormsModule} from '@angular/forms';
import {SearchBoxModule} from 'src/app/components/search-box/search-box.module';
import {FilterPipeModule} from 'src/app/pipes/filter-pipe.module';
import {HeaderModule} from 'src/app/components/header/header.module';
import {FooterModule} from 'src/app/components/footer/footer.module';
import {ArchiveComponent} from './archive.component';
import {SwitchComponent} from './components/switch/switch.component';
import {NumberInputComponent} from './components/number-input/number-input.component';
import {GamesComponent} from './components/games/games.component';
import {PostCardModule} from 'src/app/components/post-card/post-card.module';
import { TransformGamePipe } from './pipes/transform-game.pipe';

@NgModule({
    declarations: [
        ArchiveComponent,
        FiltersComponent,
        ExpansionListComponent,
        SwitchComponent,
        NumberInputComponent,
        GamesComponent,
        TransformGamePipe,
    ],
    imports: [CommonModule, FormsModule, SearchBoxModule, FilterPipeModule, HeaderModule, FooterModule, PostCardModule],
})
export class ArchiveModule {}
