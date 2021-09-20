import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IranyitasInfoComponent } from './iranyitas-info.component';

describe('IranyitasInfoComponent', () => {
  let component: IranyitasInfoComponent;
  let fixture: ComponentFixture<IranyitasInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IranyitasInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IranyitasInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
