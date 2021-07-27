import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gombsor2Component } from './gombsor2.component';

describe('Gombsor2Component', () => {
  let component: Gombsor2Component;
  let fixture: ComponentFixture<Gombsor2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gombsor2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gombsor2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
