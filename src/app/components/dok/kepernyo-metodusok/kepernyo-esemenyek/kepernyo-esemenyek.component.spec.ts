import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KepernyoEsemenyekComponent } from './kepernyo-esemenyek.component';

describe('KepernyoEsemenyekComponent', () => {
  let component: KepernyoEsemenyekComponent;
  let fixture: ComponentFixture<KepernyoEsemenyekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KepernyoEsemenyekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KepernyoEsemenyekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
