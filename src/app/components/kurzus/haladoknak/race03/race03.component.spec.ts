import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Race03Component } from './race03.component';

describe('Race03Component', () => {
  let component: Race03Component;
  let fixture: ComponentFixture<Race03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Race03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Race03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
