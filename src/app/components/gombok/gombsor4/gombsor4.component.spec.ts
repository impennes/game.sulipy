import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gombsor4Component } from './gombsor4.component';

describe('Gombsor4Component', () => {
  let component: Gombsor4Component;
  let fixture: ComponentFixture<Gombsor4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gombsor4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gombsor4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
