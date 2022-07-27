package com.example.privateHomepage.domain;

import lombok.*;

import javax.persistence.*;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Data
@AllArgsConstructor
@Entity(name = "user_information")
public class UserEntity {

    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    private String user_name;

    @Column(unique = true)
    private String phone_number;

    private String birthday;

    private String university;

    private String e_mail;

    private String location;

    private String testing;


    @Builder //데이터삽입
    public UserEntity(String phone_number, String birthday, String university, String e_mail, String location, String testing) {
        this.phone_number = phone_number;
        this.birthday = birthday;
        this.university = university;
        this.e_mail = e_mail;
        this.location = location;
        this.testing = testing;
    }

}
