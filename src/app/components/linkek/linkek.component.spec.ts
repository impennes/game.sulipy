import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkekComponent } from './linkek.component';

describe('LinkekComponent', () => {
  let component: LinkekComponent;
  let fixture: ComponentFixture<LinkekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
