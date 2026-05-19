import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardContato } from './card-contato';

describe('CardContato', () => {
  let component: CardContato;
  let fixture: ComponentFixture<CardContato>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardContato],
    }).compileComponents();

    fixture = TestBed.createComponent(CardContato);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
