import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogroutesComponent } from './dogroutes.component';

describe('DogroutesComponent', () => {
  let component: DogroutesComponent;
  let fixture: ComponentFixture<DogroutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogroutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogroutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
