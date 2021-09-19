import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KezdesComponent } from './kezdes.component';

describe('KezdesComponent', () => {
  let component: KezdesComponent;
  let fixture: ComponentFixture<KezdesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KezdesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KezdesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
