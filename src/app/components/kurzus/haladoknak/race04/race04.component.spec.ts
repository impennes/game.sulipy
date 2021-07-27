import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Race04Component } from './race04.component';

describe('Race04Component', () => {
  let component: Race04Component;
  let fixture: ComponentFixture<Race04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Race04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Race04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
