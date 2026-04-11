import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackCarousel } from './feedback-carousel';

describe('Feedback', () => {
  let component: FeedbackCarousel;
  let fixture: ComponentFixture<FeedbackCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackCarousel],
    }).compileComponents();

    fixture = TestBed.createComponent(FeedbackCarousel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
