import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Balloon02Component } from './balloon02.component';

describe('Balloon02Component', () => {
  let component: Balloon02Component;
  let fixture: ComponentFixture<Balloon02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Balloon02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Balloon02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
