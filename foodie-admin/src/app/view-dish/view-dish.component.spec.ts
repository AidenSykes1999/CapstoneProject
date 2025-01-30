import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDishComponent } from './view-dish.component';

describe('ViewDishComponent', () => {
  let component: ViewDishComponent;
  let fixture: ComponentFixture<ViewDishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewDishComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
