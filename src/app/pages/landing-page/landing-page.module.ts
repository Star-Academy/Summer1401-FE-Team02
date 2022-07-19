import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingPageComponent} from './landing-page.component';
import {RouterModule} from "@angular/router";
import {PostCardComponent} from "../../components/post-card/post-card.component";

@NgModule({
    declarations: [
        LandingPageComponent, PostCardComponent
    ],
    imports: [CommonModule,RouterModule],
})
export class LandingPageModule {
}
