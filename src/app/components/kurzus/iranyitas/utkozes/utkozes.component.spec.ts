import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtkozesComponent } from './utkozes.component';

describe('UtkozesComponent', () => {
  let component: UtkozesComponent;
  let fixture: ComponentFixture<UtkozesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtkozesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtkozesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
