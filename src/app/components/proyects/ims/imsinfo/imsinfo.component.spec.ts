import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IMSInfoComponent } from './imsinfo.component';

describe('IMSInfoComponent', () => {
  let component: IMSInfoComponent;
  let fixture: ComponentFixture<IMSInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IMSInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IMSInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
