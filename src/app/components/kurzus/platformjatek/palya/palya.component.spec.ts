import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalyaComponent } from './palya.component';

describe('PalyaComponent', () => {
  let component: PalyaComponent;
  let fixture: ComponentFixture<PalyaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalyaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
