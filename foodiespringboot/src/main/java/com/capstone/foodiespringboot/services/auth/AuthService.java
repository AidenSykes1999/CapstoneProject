package com.capstone.foodiespringboot.services.auth;

import com.capstone.foodiespringboot.dto.SignupRequest;
import com.capstone.foodiespringboot.dto.UserDto;

public interface AuthService {
	
	UserDto createUser(SignupRequest signupRequest);
	
	Boolean hasUserWithEmail(String email);

}
