import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllapotComponent } from './allapot.component';

describe('AllapotComponent', () => {
  let component: AllapotComponent;
  let fixture: ComponentFixture<AllapotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllapotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllapotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
