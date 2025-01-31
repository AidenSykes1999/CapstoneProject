package com.capstone.foodiespringboot.services.admin.restaurant;

import java.util.List;

import com.capstone.foodiespringboot.dto.RestaurantDto;
import com.capstone.foodiespringboot.entity.Restaurant;

public interface RestaurantService {
	
	Restaurant createRestaurant(RestaurantDto restaurantDto);
	
	List<Restaurant> getAllRestaurants();
		
	

}
