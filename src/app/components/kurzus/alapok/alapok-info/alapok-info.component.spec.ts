import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlapokInfoComponent } from './alapok-info.component';

describe('AlapokInfoComponent', () => {
  let component: AlapokInfoComponent;
  let fixture: ComponentFixture<AlapokInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlapokInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlapokInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
