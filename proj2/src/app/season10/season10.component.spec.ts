import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Season10Component } from './season10.component';

describe('Season10Component', () => {
  let component: Season10Component;
  let fixture: ComponentFixture<Season10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Season10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Season10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
