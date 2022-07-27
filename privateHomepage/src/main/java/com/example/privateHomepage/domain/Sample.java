package com.example.privateHomepage.domain;

import lombok.*;
import org.springframework.web.bind.annotation.GetMapping;

import javax.persistence.*;

@ToString
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "USER_TABLE_TEST")
@Entity
public class Sample {

    //DB column 생성
    //https://dev-coco.tistory.com/85
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long number;

    @Column(length = 200, nullable = false)
    private String user_name;

    @Column(length = 200, nullable = false)
    private String university;

    @Column(length = 200, nullable = false)
    private String dept;

    @Column(length = 200, nullable = false)
    private String birthday;

    @Column(length = 200, nullable = false)
    private String location;

    @Column(length = 200, nullable = false)
    private String email_address;

    @Column(length = 200, nullable = false)
    private String phone_number;

    @Column(length = 200, nullable = false)
    private String git_url;

    /*
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


     */


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
}
