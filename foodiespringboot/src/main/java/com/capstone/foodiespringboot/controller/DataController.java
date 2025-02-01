package com.capstone.foodiespringboot.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class DataController {

    @GetMapping("/data")
    public ResponseEntity<String> getData() {

        return ResponseEntity.ok("{\"message\": \"Hello from the backend!\"}");
    }
}