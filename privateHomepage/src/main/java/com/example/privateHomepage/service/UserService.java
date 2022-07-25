package com.example.privateHomepage.service;

import com.example.privateHomepage.dto.UserDTO;
import com.example.privateHomepage.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired //의존성 설정
    UserRepository userRepository;

    //create
    public UserDTO insertUser(UserDTO user) {
        return userRepository.insertUser(user);
    }

    //read
    public List<UserDTO> getAllUsers() {
        return userRepository.getAllUsers();
    }

    public UserDTO getUserByName(String userName) {
        return userRepository.getUserByUserName(userName);
    }

    //update
    public void updateUserLocation(String userName, UserDTO user) {
        userRepository.updateUserLocation(userName, user);
    }

    //delete
    public void deleteUser(String userName) {
        userRepository.deleteUser(userName);
    }
}
