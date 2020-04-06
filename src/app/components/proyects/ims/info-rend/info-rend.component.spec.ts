import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoRendComponent } from './info-rend.component';

describe('InfoRendComponent', () => {
  let component: InfoRendComponent;
  let fixture: ComponentFixture<InfoRendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoRendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoRendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
