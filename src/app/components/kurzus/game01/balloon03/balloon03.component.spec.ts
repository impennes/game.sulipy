import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Balloon03Component } from './balloon03.component';

describe('Balloon03Component', () => {
  let component: Balloon03Component;
  let fixture: ComponentFixture<Balloon03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Balloon03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Balloon03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
