import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarVErticalInfoComponent } from './navbar-vertical-info.component';

describe('NavbarVErticalInfoComponent', () => {
  let component: NavbarVErticalInfoComponent;
  let fixture: ComponentFixture<NavbarVErticalInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarVErticalInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarVErticalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
