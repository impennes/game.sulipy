import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimacioComponent } from './animacio.component';

describe('AnimacioComponent', () => {
  let component: AnimacioComponent;
  let fixture: ComponentFixture<AnimacioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimacioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimacioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
