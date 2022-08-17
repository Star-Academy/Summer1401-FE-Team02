import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {BookmarkComponent} from './bookmark.component';

describe('BookmarkComponent', () => {
    let component: BookmarkComponent;
    let fixture: ComponentFixture<BookmarkComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BookmarkComponent],
            imports: [RouterTestingModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(BookmarkComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
