import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gombsor3Component } from './gombsor3.component';

describe('Gombsor3Component', () => {
  let component: Gombsor3Component;
  let fixture: ComponentFixture<Gombsor3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gombsor3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gombsor3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
