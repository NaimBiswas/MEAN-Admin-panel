import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMessageShowComponent } from './error-message-show.component';

describe('ErrorMessageShowComponent', () => {
  let component: ErrorMessageShowComponent;
  let fixture: ComponentFixture<ErrorMessageShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorMessageShowComponent]
    });
    fixture = TestBed.createComponent(ErrorMessageShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
