import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformjatekInfoComponent } from './platformjatek-info.component';

describe('PlatformjatekInfoComponent', () => {
  let component: PlatformjatekInfoComponent;
  let fixture: ComponentFixture<PlatformjatekInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatformjatekInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformjatekInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
