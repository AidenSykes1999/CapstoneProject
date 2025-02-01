package com.capstone.foodiespringboot.services.customer;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.capstone.foodiespringboot.dto.DishDto;
import com.capstone.foodiespringboot.entity.Dish;
import com.capstone.foodiespringboot.respository.DishRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CustomerDishServiceImpl implements CustomerDishService {
	
	private final DishRepository dishRepository;
	
	public List<DishDto> getAllDishes(){
		List<Dish> dishes = dishRepository.findAll();
		return dishes.stream().map(Dish::getDto).collect(Collectors.toList());
	}
	
	public List<DishDto> searchDishByTitle(String name){
		List<Dish> dishes = dishRepository.findAllByNameContaining(name);
		return dishes.stream().map(Dish::getDto).collect(Collectors.toList());
	}

}
