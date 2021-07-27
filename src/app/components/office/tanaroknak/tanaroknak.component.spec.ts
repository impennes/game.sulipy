import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TanaroknakComponent } from './tanaroknak.component';

describe('TanaroknakComponent', () => {
  let component: TanaroknakComponent;
  let fixture: ComponentFixture<TanaroknakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TanaroknakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TanaroknakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
