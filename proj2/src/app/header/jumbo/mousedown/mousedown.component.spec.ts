import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MousedownComponent } from './mousedown.component';

describe('MousedownComponent', () => {
  let component: MousedownComponent;
  let fixture: ComponentFixture<MousedownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MousedownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MousedownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
