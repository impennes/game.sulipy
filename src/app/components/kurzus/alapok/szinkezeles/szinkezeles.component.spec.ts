import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SzinkezelesComponent } from './szinkezeles.component';

describe('SzinkezelesComponent', () => {
  let component: SzinkezelesComponent;
  let fixture: ComponentFixture<SzinkezelesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SzinkezelesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SzinkezelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
