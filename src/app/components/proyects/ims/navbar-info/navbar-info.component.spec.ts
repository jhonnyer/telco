import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarInfoComponent } from './navbar-info.component';

describe('NavbarInfoComponent', () => {
  let component: NavbarInfoComponent;
  let fixture: ComponentFixture<NavbarInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
