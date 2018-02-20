import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingPlaceComponent } from './voting-place.component';

describe('VotingPlaceComponent', () => {
  let component: VotingPlaceComponent;
  let fixture: ComponentFixture<VotingPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotingPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotingPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
