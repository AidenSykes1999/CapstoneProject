import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteditComponent } from './restaurantedit.component';

describe('RestauranteditComponent', () => {
  let component: RestauranteditComponent;
  let fixture: ComponentFixture<RestauranteditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestauranteditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestauranteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
