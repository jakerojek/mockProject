package com.jake.restaurant.utility;

import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import com.jake.restaurant.exception.*;
@Component
@Aspect
public class LoggingAspect {
	
	@AfterThrowing(pointcut = "execution(* com.jake.restaurant.repository.*.*(..))", throwing = "exception")
	public void logExceptionFromRepository(Exception exception) /*throws InvalidInputException*/ {		
		log(exception);		
	}
	
	@AfterThrowing(pointcut = "execution(* com.jake.restaurant.service.*.*(..))", throwing = "exception")
	public void logExceptionFromService(Exception exception) /*throws InvalidInputException*/ {		
		if (exception.getMessage().contains("Service")) {
			log(exception);
		}	
	}	
	
	private void log(Exception exception) {
		Logger logger = LoggerFactory.getLogger(this.getClass());
		logger.error(exception.getMessage(), exception);
	}
}
