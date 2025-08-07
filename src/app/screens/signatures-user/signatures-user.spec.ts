import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignaturesUser } from './signatures-user';

describe('SignaturesUser', () => {
  let component: SignaturesUser;
  let fixture: ComponentFixture<SignaturesUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignaturesUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignaturesUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
