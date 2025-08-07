import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailUser } from './mail-user';

describe('MailUser', () => {
  let component: MailUser;
  let fixture: ComponentFixture<MailUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MailUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
