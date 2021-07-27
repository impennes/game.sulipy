import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FejlesztesAlattComponent } from './fejlesztes-alatt.component';

describe('FejlesztesAlattComponent', () => {
  let component: FejlesztesAlattComponent;
  let fixture: ComponentFixture<FejlesztesAlattComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FejlesztesAlattComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FejlesztesAlattComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
