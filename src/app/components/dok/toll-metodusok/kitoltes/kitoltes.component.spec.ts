import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitoltesComponent } from './kitoltes.component';

describe('KitoltesComponent', () => {
  let component: KitoltesComponent;
  let fixture: ComponentFixture<KitoltesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitoltesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitoltesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
