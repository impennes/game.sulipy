import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdatbevitelComponent } from './adatbevitel.component';

describe('AdatbevitelComponent', () => {
  let component: AdatbevitelComponent;
  let fixture: ComponentFixture<AdatbevitelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdatbevitelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdatbevitelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
