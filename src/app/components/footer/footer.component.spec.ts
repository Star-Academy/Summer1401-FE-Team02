import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FooterComponent} from './footer.component';

describe('FooterComponent', () => {
    let component: FooterComponent;
    let fixture: ComponentFixture<FooterComponent>;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FooterComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FooterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show copyright', () => {
        const copyrightText = host.querySelector('.footer__copyright')!.textContent;
        expect(copyrightText).toEqual('تمامی حقوق مادی و معنوی این سایت متعلق به Game-Up می‌باشد.');
    });
});
