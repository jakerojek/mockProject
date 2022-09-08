package com.jake.restaurant.exception;

@SuppressWarnings("serial")
public class FoodIdAlreadyPresentException extends OrderException{
	
	public FoodIdAlreadyPresentException(String message) {
		super(message);
	}

}
