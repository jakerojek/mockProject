package com.jake.restaurant.exception;

@SuppressWarnings("serial")
public class ItemNotFoundException extends Exception {
	
	public ItemNotFoundException(Integer id) {	
	    super("Could not find employee " + id); 
	}
	

}
