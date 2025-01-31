package com.capstone.foodiespringboot.controller.admin;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capstone.foodiespringboot.dto.RestaurantDto;
import com.capstone.foodiespringboot.entity.Restaurant;
import com.capstone.foodiespringboot.services.admin.restaurant.RestaurantService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminRestaurantController {

	private final RestaurantService restaurantService;
	
	@PostMapping("restaurant")
	public ResponseEntity<Restaurant> createRestaurant(@RequestBody RestaurantDto restaurantDto){
		Restaurant restaurant = restaurantService.createRestaurant(restaurantDto);
		return ResponseEntity.status(HttpStatus.CREATED).body(restaurant);
		
		
	}
	
}
