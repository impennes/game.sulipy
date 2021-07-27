import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElsoLepesekComponent } from './elso-lepesek.component';

describe('ElsoLepesekComponent', () => {
  let component: ElsoLepesekComponent;
  let fixture: ComponentFixture<ElsoLepesekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElsoLepesekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElsoLepesekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
