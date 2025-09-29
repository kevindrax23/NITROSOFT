import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroPhysics } from './intro-physics';

describe('IntroPhysics', () => {
  let component: IntroPhysics;
  let fixture: ComponentFixture<IntroPhysics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroPhysics]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroPhysics);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
