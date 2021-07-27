import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KepernyoMetodusokInfoComponent } from './kepernyo-metodusok-info.component';

describe('KepernyoMetodusokInfoComponent', () => {
  let component: KepernyoMetodusokInfoComponent;
  let fixture: ComponentFixture<KepernyoMetodusokInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KepernyoMetodusokInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KepernyoMetodusokInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
