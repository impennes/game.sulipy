import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TovabbiFunkciokComponent } from './tovabbi-funkciok.component';

describe('TovabbiFunkciokComponent', () => {
  let component: TovabbiFunkciokComponent;
  let fixture: ComponentFixture<TovabbiFunkciokComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TovabbiFunkciokComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TovabbiFunkciokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
