import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JatekosAnimacioComponent } from './jatekos-animacio.component';

describe('JatekosAnimacioComponent', () => {
  let component: JatekosAnimacioComponent;
  let fixture: ComponentFixture<JatekosAnimacioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JatekosAnimacioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JatekosAnimacioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
