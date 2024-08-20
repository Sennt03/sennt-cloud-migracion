import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadSnackBarComponent } from './download-snack-bar.component';

describe('DownloadSnackBarComponent', () => {
  let component: DownloadSnackBarComponent;
  let fixture: ComponentFixture<DownloadSnackBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DownloadSnackBarComponent]
    });
    fixture = TestBed.createComponent(DownloadSnackBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
