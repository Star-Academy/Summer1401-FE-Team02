import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProfilePopperComponent} from './profile-popper.component';

describe('ProfilePopperComponent', () => {
    let component: ProfilePopperComponent;
    let fixture: ComponentFixture<ProfilePopperComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ProfilePopperComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ProfilePopperComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
