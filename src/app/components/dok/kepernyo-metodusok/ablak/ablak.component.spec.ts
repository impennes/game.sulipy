import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AblakComponent } from './ablak.component';

describe('AblakComponent', () => {
  let component: AblakComponent;
  let fixture: ComponentFixture<AblakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AblakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AblakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
