package com.jake.restaurant.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jake.restaurant.entity.FoodEntity;
import com.jake.restaurant.exception.FoodIdAlreadyPresentException;
import com.jake.restaurant.model.Food;
import com.jake.restaurant.repository.FoodRepository;

@Service
public class OrderService {
	
	@Autowired
	private FoodRepository foodRepository;
	
	public void registerFood(Food food) throws FoodIdAlreadyPresentException {
		
		boolean ue = foodRepository.existsById(food.getFoodId());
		
		if(ue) {
			throw new FoodIdAlreadyPresentException("Food is already present.");
		}
		
		FoodEntity foodEntity = new FoodEntity();
		foodEntity.setFoodId(food.getFoodId());
		foodEntity.setFoodName(food.getFoodName());
		foodEntity.setDescription(food.getDescription());
		foodRepository.saveAndFlush(foodEntity);
		
	}
	

}
