import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantformComponent } from './restaurantform.component';

describe('RestaurantformComponent', () => {
  let component: RestaurantformComponent;
  let fixture: ComponentFixture<RestaurantformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
