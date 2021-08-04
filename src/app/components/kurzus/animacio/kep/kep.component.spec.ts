import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KepComponent } from './kep.component';

describe('KepComponent', () => {
  let component: KepComponent;
  let fixture: ComponentFixture<KepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
