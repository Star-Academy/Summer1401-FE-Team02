import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-post-card',
    templateUrl: './post-card.component.html',
    styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent {
    @Input() public poster: string = 'assets/minecraft.jpg';
    @Input() public title: string = 'ماینکرفت';
    @Input() public price: number = 9;
    @Input() public description: string =
        'در دنیای ماینکرفت با هیولاها مبارزه کنید و مسیر خود را در دنیای الهام گرفته شده از بازی کلاسیک dungeon crawlers به سوی موفقیت بیابید.';
    @Input() public link: string = '#';
}
