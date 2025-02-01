package com.capstone.foodiespringboot.services.admin.admindish;

import java.io.IOException;
import java.util.List;

import com.capstone.foodiespringboot.dto.DishDto;

public interface AdminDishService {

	DishDto addDish(DishDto dishDto) throws IOException;
	
	List<DishDto> getAllDishes();
	
	List<DishDto> getAllDishesByName(String name);
	
}
