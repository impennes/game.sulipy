import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UgrasComponent } from './ugras.component';

describe('UgrasComponent', () => {
  let component: UgrasComponent;
  let fixture: ComponentFixture<UgrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UgrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UgrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
