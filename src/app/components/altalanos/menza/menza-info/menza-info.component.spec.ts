import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenzaInfoComponent } from './menza-info.component';

describe('MenzaInfoComponent', () => {
  let component: MenzaInfoComponent;
  let fixture: ComponentFixture<MenzaInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenzaInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenzaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
