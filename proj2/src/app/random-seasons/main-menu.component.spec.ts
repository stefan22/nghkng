import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomSeasonsComponent } from './random-seasons.component';

describe('MainMenuComponent', () => {
  let component: RandomSeasonsComponent;
  let fixture: ComponentFixture<RandomSeasonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomSeasonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomSeasonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
