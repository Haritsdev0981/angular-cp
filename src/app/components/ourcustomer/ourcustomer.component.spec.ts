import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurcustomerComponent } from './ourcustomer.component';

describe('OurcustomerComponent', () => {
  let component: OurcustomerComponent;
  let fixture: ComponentFixture<OurcustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurcustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
