import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingPageComponent} from './landing-page.component';
import {RouterModule} from '@angular/router';
import {PostCardComponent} from '../../components/post-card/post-card.component';
import {FirstBannerComponent} from './components/first-banner/first-banner.component';
import {SlideShowComponent} from './components/first-banner/components/slide-show/slide-show.component';
import {BannerGameTileComponent} from './components/first-banner/components/banner-game-tile/banner-game-tile.component';
import {HeaderModule} from '../../components/header/header.module';
import {FooterModule} from '../../components/footer/footer.module';

@NgModule({
    declarations: [
        LandingPageComponent,
        PostCardComponent,
        FirstBannerComponent,
        SlideShowComponent,
        BannerGameTileComponent,
    ],
    imports: [CommonModule, RouterModule, HeaderModule, FooterModule],
    exports: [FirstBannerComponent],
})
export class LandingPageModule {}
