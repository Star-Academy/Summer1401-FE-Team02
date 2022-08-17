import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {ArchiveComponent} from './archive.component';

describe('ArchiveComponent', () => {
    let component: ArchiveComponent;
    let fixture: ComponentFixture<ArchiveComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ArchiveComponent],
            imports: [RouterTestingModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ArchiveComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
