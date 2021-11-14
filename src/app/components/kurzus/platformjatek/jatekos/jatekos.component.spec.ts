import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JatekosComponent } from './jatekos.component';

describe('JatekosComponent', () => {
  let component: JatekosComponent;
  let fixture: ComponentFixture<JatekosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JatekosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JatekosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
