import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MozgasComponent } from './mozgas.component';

describe('MozgasComponent', () => {
  let component: MozgasComponent;
  let fixture: ComponentFixture<MozgasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MozgasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MozgasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
