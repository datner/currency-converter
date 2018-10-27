import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastConversionComponent } from './last-conversion.component';

describe('LastConversionComponent', () => {
  let component: LastConversionComponent;
  let fixture: ComponentFixture<LastConversionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastConversionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
