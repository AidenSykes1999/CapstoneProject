package com.capstone.foodiespringboot.services.admin.admindish;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.capstone.foodiespringboot.dto.DishDto;
import com.capstone.foodiespringboot.entity.Dish;
import com.capstone.foodiespringboot.entity.Restaurant;
import com.capstone.foodiespringboot.respository.DishRepository;
import com.capstone.foodiespringboot.respository.RestaurantRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdminDishServiceImpl implements AdminDishService{

	private final DishRepository dishRepository;
	private final RestaurantRepository restaurantRepository;
	
	
	public DishDto addDish(DishDto dishDto) {
		Dish dish = new Dish();
		dish.setName(dishDto.getName());
		dish.setPrice(dishDto.getPrice());
		
		Restaurant restaurant = restaurantRepository.findById(dishDto.getRestaurantId()).orElseThrow();
		
		dish.setRestaurant(restaurant);
		
		return dishRepository.save(dish).getDto();
	}
	
	
	public List<DishDto> getAllDishes(){
		List<Dish> dishes = dishRepository.findAll();
		return dishes.stream().map(Dish::getDto).collect(Collectors.toList());
	}
	
	
}
