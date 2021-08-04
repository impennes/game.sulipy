import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElsoProgramComponent } from './elso-program.component';

describe('ElsoProgramComponent', () => {
  let component: ElsoProgramComponent;
  let fixture: ComponentFixture<ElsoProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElsoProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElsoProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
