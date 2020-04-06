import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SNMPInfoComponent } from './snmpinfo.component';

describe('SNMPInfoComponent', () => {
  let component: SNMPInfoComponent;
  let fixture: ComponentFixture<SNMPInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SNMPInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SNMPInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
