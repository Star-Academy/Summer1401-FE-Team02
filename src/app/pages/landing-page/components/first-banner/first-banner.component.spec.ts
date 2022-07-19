import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstBannerComponent } from './first-banner.component';

describe('FirstBannerComponent', () => {
  let component: FirstBannerComponent;
  let fixture: ComponentFixture<FirstBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
