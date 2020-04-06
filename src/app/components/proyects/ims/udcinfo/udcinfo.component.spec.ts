import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UDCInfoComponent } from './udcinfo.component';

describe('UDCInfoComponent', () => {
  let component: UDCInfoComponent;
  let fixture: ComponentFixture<UDCInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UDCInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UDCInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
