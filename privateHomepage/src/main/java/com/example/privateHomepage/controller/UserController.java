package com.example.privateHomepage.controller;


import com.example.privateHomepage.dto.UserDTO;
import com.example.privateHomepage.service.UserService;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    UserService userService;

    //CRUD
    //create -> post
    //Read -> get
    //Update -> put
    //Delete -> delete

    @PatchMapping("")
    public UserDTO insertUser(@RequestBody UserDTO user) {
        return userService.insertUser(user);
    }

    @GetMapping("")
    public List<UserDTO> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{userName}")
    public UserDTO getUserByUserName(@PathVariable String userName) {
        return userService.getUserByName(userName);
    }

    @PutMapping("/{userName}")
    public void updateUserLocation(@PathVariable String userName, @RequestBody UserDTO user) {
        userService.updateUserLocation(userName, user);
    }

    @DeleteMapping("/{userName}")
    public void deleteUser(@PathVariable String userName) {
        userService.deleteUser(userName);
    }

}
