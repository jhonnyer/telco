import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VIMSInfoComponent } from './v-imsinfo.component';

describe('VIMSInfoComponent', () => {
  let component: VIMSInfoComponent;
  let fixture: ComponentFixture<VIMSInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VIMSInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VIMSInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
