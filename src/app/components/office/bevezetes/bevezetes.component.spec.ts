import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BevezetesComponent } from './bevezetes.component';

describe('BevezetesComponent', () => {
  let component: BevezetesComponent;
  let fixture: ComponentFixture<BevezetesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BevezetesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BevezetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
