import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectExamsng } from './subject-examsng';

describe('SubjectExamsng', () => {
  let component: SubjectExamsng;
  let fixture: ComponentFixture<SubjectExamsng>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectExamsng]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectExamsng);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
