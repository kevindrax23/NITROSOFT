import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicsLessons } from './physics-lessons';

describe('PhysicsLessons', () => {
  let component: PhysicsLessons;
  let fixture: ComponentFixture<PhysicsLessons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhysicsLessons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhysicsLessons);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
