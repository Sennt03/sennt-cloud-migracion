import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalActionsComponent } from './modal-actions.component';

describe('ModalActionsComponent', () => {
  let component: ModalActionsComponent;
  let fixture: ComponentFixture<ModalActionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalActionsComponent]
    });
    fixture = TestBed.createComponent(ModalActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
