import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimacioInfoComponent } from './animacio-info.component';

describe('AnimacioInfoComponent', () => {
  let component: AnimacioInfoComponent;
  let fixture: ComponentFixture<AnimacioInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimacioInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimacioInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
