import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillentyuzetComponent } from './billentyuzet.component';

describe('BillentyuzetComponent', () => {
  let component: BillentyuzetComponent;
  let fixture: ComponentFixture<BillentyuzetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillentyuzetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillentyuzetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
