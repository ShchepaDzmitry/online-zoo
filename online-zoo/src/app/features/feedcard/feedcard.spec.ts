import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feedcard } from './feedcard';

describe('Feedcard', () => {
  let component: Feedcard;
  let fixture: ComponentFixture<Feedcard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Feedcard],
    }).compileComponents();

    fixture = TestBed.createComponent(Feedcard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
