import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NFVInfoComponent } from './nfvinfo.component';

describe('NFVInfoComponent', () => {
  let component: NFVInfoComponent;
  let fixture: ComponentFixture<NFVInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NFVInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NFVInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
