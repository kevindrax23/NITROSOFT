import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingCharge } from './loading-charge';

describe('LoadingCharge', () => {
  let component: LoadingCharge;
  let fixture: ComponentFixture<LoadingCharge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingCharge]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingCharge);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
