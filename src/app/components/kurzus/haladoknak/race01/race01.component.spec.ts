import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Race01Component } from './race01.component';

describe('Race01Component', () => {
  let component: Race01Component;
  let fixture: ComponentFixture<Race01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Race01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Race01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
