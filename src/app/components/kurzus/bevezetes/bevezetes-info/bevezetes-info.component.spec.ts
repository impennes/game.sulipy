import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BevezetesInfoComponent } from './bevezetes-info.component';

describe('BevezetesInfoComponent', () => {
  let component: BevezetesInfoComponent;
  let fixture: ComponentFixture<BevezetesInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BevezetesInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BevezetesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
