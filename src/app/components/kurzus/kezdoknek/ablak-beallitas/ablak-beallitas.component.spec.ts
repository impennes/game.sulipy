import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AblakBeallitasComponent } from './ablak-beallitas.component';

describe('AblakBeallitasComponent', () => {
  let component: AblakBeallitasComponent;
  let fixture: ComponentFixture<AblakBeallitasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AblakBeallitasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AblakBeallitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
