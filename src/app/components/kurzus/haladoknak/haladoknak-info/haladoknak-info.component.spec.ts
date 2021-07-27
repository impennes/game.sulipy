import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaladoknakInfoComponent } from './haladoknak-info.component';

describe('HaladoknakInfoComponent', () => {
  let component: HaladoknakInfoComponent;
  let fixture: ComponentFixture<HaladoknakInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaladoknakInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaladoknakInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
