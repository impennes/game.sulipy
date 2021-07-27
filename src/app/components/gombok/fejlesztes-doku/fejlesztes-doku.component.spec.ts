import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FejlesztesDokuComponent } from './fejlesztes-doku.component';

describe('FejlesztesDokuComponent', () => {
  let component: FejlesztesDokuComponent;
  let fixture: ComponentFixture<FejlesztesDokuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FejlesztesDokuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FejlesztesDokuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
