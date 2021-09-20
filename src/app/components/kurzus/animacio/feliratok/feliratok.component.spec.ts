import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeliratokComponent } from './feliratok.component';

describe('FeliratokComponent', () => {
  let component: FeliratokComponent;
  let fixture: ComponentFixture<FeliratokComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeliratokComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeliratokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
