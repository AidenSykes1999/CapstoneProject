package com.capstone.foodiespringboot.services.admin.restaurant;

import java.util.List;

import org.springframework.stereotype.Service;

import com.capstone.foodiespringboot.dto.RestaurantDto;
import com.capstone.foodiespringboot.entity.Restaurant;
import com.capstone.foodiespringboot.respository.RestaurantRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class RestaurantServiceImpl implements RestaurantService {

	private final RestaurantRepository restaurantRepository;
	
	public Restaurant createRestaurant(RestaurantDto restaurantDto) {
		
		Restaurant restaurant = new Restaurant();
		restaurant.setName(restaurantDto.getName());
		restaurant.setLocation(restaurantDto.getLocation());
		
		return restaurantRepository.save(restaurant);

		
	}
	
	public List<Restaurant> getAllRestaurants(){
		
		return restaurantRepository.findAll();
		
	}
	
}
