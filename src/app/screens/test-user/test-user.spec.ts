import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestUser } from './test-user';

describe('TestUser', () => {
  let component: TestUser;
  let fixture: ComponentFixture<TestUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
