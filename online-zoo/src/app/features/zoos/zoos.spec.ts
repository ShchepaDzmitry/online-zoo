import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zoos } from './zoos';

describe('Zoos', () => {
  let component: Zoos;
  let fixture: ComponentFixture<Zoos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Zoos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Zoos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
