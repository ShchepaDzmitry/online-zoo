import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayAndFeedCard } from './pay-and-feed-card';

describe('PayAndFeedCard', () => {
  let component: PayAndFeedCard;
  let fixture: ComponentFixture<PayAndFeedCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayAndFeedCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayAndFeedCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
