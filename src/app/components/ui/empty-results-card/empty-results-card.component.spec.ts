import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyResultsCardComponent } from './empty-results-card.component';

describe('EmptyResultsCardComponent', () => {
  let component: EmptyResultsCardComponent;
  let fixture: ComponentFixture<EmptyResultsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptyResultsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmptyResultsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
