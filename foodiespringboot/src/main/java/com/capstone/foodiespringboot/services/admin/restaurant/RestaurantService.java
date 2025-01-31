package com.capstone.foodiespringboot.services.admin.restaurant;

import com.capstone.foodiespringboot.dto.RestaurantDto;
import com.capstone.foodiespringboot.entity.Restaurant;

public interface RestaurantService {
	
	Restaurant createRestaurant(RestaurantDto restaurantDto);

}
