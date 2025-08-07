import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticsUser } from './statics-user';

describe('StaticsUser', () => {
  let component: StaticsUser;
  let fixture: ComponentFixture<StaticsUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaticsUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaticsUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
