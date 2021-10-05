import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Game01InfoComponent } from './game01-info.component';

describe('Game01InfoComponent', () => {
  let component: Game01InfoComponent;
  let fixture: ComponentFixture<Game01InfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Game01InfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Game01InfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
