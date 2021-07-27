import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TollMetodusokInfoComponent } from './toll-metodusok-info.component';

describe('TollMetodusokInfoComponent', () => {
  let component: TollMetodusokInfoComponent;
  let fixture: ComponentFixture<TollMetodusokInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TollMetodusokInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TollMetodusokInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
