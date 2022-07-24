import {Component, Input} from '@angular/core';
import {Game} from 'src/app/interfaces/Game.interface';

@Component({
    selector: 'app-post-card',
    templateUrl: './post-card.component.html',
    styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent {
    @Input() public game: Game = {
        title: "Wonder boy: The dragon's trap",
        description:
            'به دنبال درمانی برای طلسم خود، شما در یک ماجراجویی به دنبال ابزاری جادویی می‌گردید که میتواند طلسم شما را باطل کند.',
        price: 10000,
        poster: 'https://cdn1.epicgames.com/spt-assets/e488839155be4d05bb14f6e05129daef/download-wonder-boy-the-dragons-trap-offer-e0awf.jpg?h=854&resize=1&w=360',
    };
}
