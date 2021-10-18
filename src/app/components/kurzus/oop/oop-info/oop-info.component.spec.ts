import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OopInfoComponent } from './oop-info.component';

describe('OopInfoComponent', () => {
  let component: OopInfoComponent;
  let fixture: ComponentFixture<OopInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OopInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OopInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
