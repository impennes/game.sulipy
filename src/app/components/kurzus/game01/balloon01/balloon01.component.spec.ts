import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Balloon01Component } from './balloon01.component';

describe('Balloon01Component', () => {
  let component: Balloon01Component;
  let fixture: ComponentFixture<Balloon01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Balloon01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Balloon01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
