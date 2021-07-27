import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurtleMetodusokInfoComponent } from './turtle-metodusok-info.component';

describe('TurtleMetodusokInfoComponent', () => {
  let component: TurtleMetodusokInfoComponent;
  let fixture: ComponentFixture<TurtleMetodusokInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurtleMetodusokInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurtleMetodusokInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
