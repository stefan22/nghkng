import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogledogComponent } from './googledog.component';

describe('GoogledogComponent', () => {
  let component: GoogledogComponent;
  let fixture: ComponentFixture<GoogledogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogledogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogledogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
