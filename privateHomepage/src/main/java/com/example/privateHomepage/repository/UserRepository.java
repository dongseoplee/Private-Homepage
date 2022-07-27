package com.example.privateHomepage.repository;

//데이터베이스에서 데이터를 가져와서 저장하는 장소

import com.example.privateHomepage.dto.UserDTO;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class UserRepository {

    static public ArrayList<UserDTO> users;

    static {
        users = new ArrayList<>();
        users.add(new UserDTO("Lee", "010", "01.01", "GC", "@naver.com", "korea"));
        users.add(new UserDTO("Kim", "010", "02.01", "GC", "@naver.com", "korea"));
        users.add(new UserDTO("Park", "010", "03.01", "SJ", "@naver.com", "korea"));
    }

    //create
    //data type: UserDTO
    public UserDTO insertUser(UserDTO user) {
        users.add(user);
        return user;
    }

    //read
    public List<UserDTO> getAllUsers() {
        return users;
    }

    public UserDTO getUserByUserName(String userName) {
        return users.stream()
                .filter(userDTO -> userDTO.getUser_name().equals(userName))
                .findAny() //userName에 맞는 값이 있으면
                .orElse(new UserDTO("", "", "", "", "", "")); //없으면
    }

    //update
    public void updateUserLocation(String userName, UserDTO user) {
        users.stream()
                .filter(userDTO -> userDTO.getUser_name().equals(userName))
                .findAny()
                .orElse(new UserDTO("", "", "", "", "", ""))
                .setLocation(user.getLocation());
    }

    //delete
    public void deleteUser(String userName) {
        users.removeIf(userDTO -> userDTO.getUser_name().equals(userName));
    }





}
