package com.capstone.foodiespringboot.respository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.capstone.foodiespringboot.entity.Dish;

@Repository
public interface DishRepository extends JpaRepository<Dish, Long> {

	List<Dish> findAllByNameContaining(String title);
	
}
