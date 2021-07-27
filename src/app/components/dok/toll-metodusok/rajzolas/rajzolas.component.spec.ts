import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RajzolasComponent } from './rajzolas.component';

describe('RajzolasComponent', () => {
  let component: RajzolasComponent;
  let fixture: ComponentFixture<RajzolasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RajzolasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RajzolasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
