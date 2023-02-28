import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorShowPopupComponent } from './error-show-popup.component';

describe('ErrorShowPopupComponent', () => {
  let component: ErrorShowPopupComponent;
  let fixture: ComponentFixture<ErrorShowPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorShowPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorShowPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
