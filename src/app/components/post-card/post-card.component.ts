import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-post-card',
    templateUrl: './post-card.component.html',
    styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent {
    @Input() public poster: string = 'assets/minecraft.jpg';
    @Input() public title: string = 'minecraft';
    @Input() public price: string = '9';
    @Input() public description: string =
        'Fight your way through an exciting action-adventure game, inspired by classic dungeon crawlers and set in the Minecraft universe!';
    @Input() public link: string = '#';
}
