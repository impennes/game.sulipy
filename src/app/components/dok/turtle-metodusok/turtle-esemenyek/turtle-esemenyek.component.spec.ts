import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurtleEsemenyekComponent } from './turtle-esemenyek.component';

describe('TurtleEsemenyekComponent', () => {
  let component: TurtleEsemenyekComponent;
  let fixture: ComponentFixture<TurtleEsemenyekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurtleEsemenyekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurtleEsemenyekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
