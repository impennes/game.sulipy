import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgerComponent } from './eger.component';

describe('EgerComponent', () => {
  let component: EgerComponent;
  let fixture: ComponentFixture<EgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
