import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostrestaurantComponent } from './postrestaurant.component';

describe('PostrestaurantComponent', () => {
  let component: PostrestaurantComponent;
  let fixture: ComponentFixture<PostrestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostrestaurantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostrestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
