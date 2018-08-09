import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Season10DetailsComponent } from './season10-details.component';

describe('Season10DetailsComponent', () => {
  let component: Season10DetailsComponent;
  let fixture: ComponentFixture<Season10DetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Season10DetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Season10DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
