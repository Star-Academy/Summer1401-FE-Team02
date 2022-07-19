import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingPageComponent} from './landing-page.component';
import {RouterModule} from "@angular/router";
import {PostCardComponent} from "../../components/post-card/post-card.component";
import {HeaderModule} from "../../components/header/header.module";
import {FooterModule} from "../../components/footer/footer.module";
import { FirstBannerComponent } from './components/first-banner/first-banner.component';

@NgModule({
    declarations: [
        LandingPageComponent, PostCardComponent, FirstBannerComponent
    ],
    imports: [CommonModule, RouterModule, HeaderModule, FooterModule],
})
export class LandingPageModule {
}
