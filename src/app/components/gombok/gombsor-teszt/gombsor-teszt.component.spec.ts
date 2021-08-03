import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GombsorTesztComponent } from './gombsor-teszt.component';

describe('GombsorTesztComponent', () => {
  let component: GombsorTesztComponent;
  let fixture: ComponentFixture<GombsorTesztComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GombsorTesztComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GombsorTesztComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
