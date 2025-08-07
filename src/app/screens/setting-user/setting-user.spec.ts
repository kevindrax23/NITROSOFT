import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingUser } from './setting-user';

describe('SettingUser', () => {
  let component: SettingUser;
  let fixture: ComponentFixture<SettingUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
