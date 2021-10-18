import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpritecollideComponent } from './spritecollide.component';

describe('SpritecollideComponent', () => {
  let component: SpritecollideComponent;
  let fixture: ComponentFixture<SpritecollideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpritecollideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpritecollideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
