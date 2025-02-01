package com.capstone.foodiespringboot.services.customer;

import java.util.List;

import com.capstone.foodiespringboot.dto.DishDto;

public interface CustomerDishService {

	List<DishDto> searchDishByTitle(String title);
	
	List<DishDto> getAllDishes();
	
}
