import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Race02Component } from './race02.component';

describe('Race02Component', () => {
  let component: Race02Component;
  let fixture: ComponentFixture<Race02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Race02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Race02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
