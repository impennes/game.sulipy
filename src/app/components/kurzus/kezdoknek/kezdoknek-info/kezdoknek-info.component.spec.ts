import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KezdoknekInfoComponent } from './kezdoknek-info.component';

describe('KezdoknekInfoComponent', () => {
  let component: KezdoknekInfoComponent;
  let fixture: ComponentFixture<KezdoknekInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KezdoknekInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KezdoknekInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
