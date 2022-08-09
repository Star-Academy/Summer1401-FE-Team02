import {ComponentFixture, TestBed} from '@angular/core/testing';
import {SlideShowComponent} from './slide-show.component';

describe('SlideShowComponent', () => {
    let component: SlideShowComponent;
    let fixture: ComponentFixture<SlideShowComponent>;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SlideShowComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SlideShowComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should init active index', () => {
        expect(component.activeIndex).toEqual(0);
    });

    it('should start timeout', () => {
        expect(component.interval).toBeTruthy();
    });

    it('should increase active index', () => {
        const nextButton = host.querySelector('[data-test-id="nextButton"]');
        nextButton?.dispatchEvent(new Event('click'));
        fixture.detectChanges();
        expect(component.activeIndex).toEqual(1);
    });

    it('should decrease active index', () => {
        const prevButton = host.querySelector('[data-test-id="prevButton"]');
        prevButton?.dispatchEvent(new Event('click'));
        fixture.detectChanges();
        expect(component.activeIndex).toEqual(component.banners.length - 1);
    });
});
