package com.jake.restaurant.model;

import javax.validation.constraints.NotNull;

public class Food {
	
	@NotNull(message = "FoodId must not be blank.")
	private int foodId;
	@NotNull(message = "Name cannot be blank.")
	private String foodName;
	@NotNull(message = "Description cannot be blank.")
	private String description;
	
	public int getFoodId() {
		return foodId;
	}
	public void setFoodId(int foodId) {
		this.foodId = foodId;
	}
	public String getFoodName() {
		return foodName;
	}
	public void setFoodName(String foodName) {
		this.foodName = foodName;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	

}
