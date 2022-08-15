import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingPageComponent} from './landing-page.component';
import {RouterModule} from '@angular/router';
import {FirstBannerComponent} from './components/first-banner/first-banner.component';
import {SlideShowComponent} from './components/first-banner/components/slide-show/slide-show.component';
import {HeaderModule} from '../../components/header/header.module';
import {FooterModule} from '../../components/footer/footer.module';
import {PostCardModule} from 'src/app/components/post-card/post-card.module';
import {ToPostcardPipeModule} from 'src/app/pipes/to-postcard-pipe.module';
import {ImageSrcPipeModule} from 'src/app/pipes/image-src-pipe.module';

@NgModule({
    declarations: [LandingPageComponent, FirstBannerComponent, SlideShowComponent],
    imports: [
        CommonModule,
        RouterModule,
        HeaderModule,
        FooterModule,
        PostCardModule,
        ToPostcardPipeModule,
        ImageSrcPipeModule,
    ],
    exports: [FirstBannerComponent],
})
export class LandingPageModule {}
