import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaploComponent } from './naplo.component';

describe('NaploComponent', () => {
  let component: NaploComponent;
  let fixture: ComponentFixture<NaploComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaploComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
