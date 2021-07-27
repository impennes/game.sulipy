import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SzinbeallitasComponent } from './szinbeallitas.component';

describe('SzinbeallitasComponent', () => {
  let component: SzinbeallitasComponent;
  let fixture: ComponentFixture<SzinbeallitasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SzinbeallitasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SzinbeallitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
