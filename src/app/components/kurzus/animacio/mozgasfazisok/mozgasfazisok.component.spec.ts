import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MozgasfazisokComponent } from './mozgasfazisok.component';

describe('MozgasfazisokComponent', () => {
  let component: MozgasfazisokComponent;
  let fixture: ComponentFixture<MozgasfazisokComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MozgasfazisokComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MozgasfazisokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
