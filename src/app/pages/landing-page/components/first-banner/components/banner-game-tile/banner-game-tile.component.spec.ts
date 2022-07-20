import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerGameTileComponent } from './banner-game-tile.component';

describe('BannerGameTileComponent', () => {
  let component: BannerGameTileComponent;
  let fixture: ComponentFixture<BannerGameTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerGameTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerGameTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
