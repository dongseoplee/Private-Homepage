package com.example.privateHomepage.domain;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity(name = "USER_TABLE")
public class Sample {

    /*
    [DB columns]
    userName
    university
    dept
    birthday
    location
    emailAddress
    phoneNumber
    gitURL
    HTMLCSSJS
    react
    python
    mySql
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long number;

    private String user_name;

    private String university;

    private String dept;

    private String birthday;

    private String location;

    private String email_address;

    private String phone_number;

    private String git_url;


    @Builder //db column 생성 역할
    public Sample(String user_name, String university, String dept, String birthday,
                  String location, String email_address, String phone_number, String git_url) {
        this.user_name = user_name;
        this.university = university;
        this.dept = dept;
        this.birthday = birthday;
        this.location = location;
        this.email_address = email_address;
        this.phone_number = phone_number;
        this.git_url = git_url;
    }
}
