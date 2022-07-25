package com.example.privateHomepage.dto;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor //생성자
@ToString
@Builder
@Getter
@Setter
public class UserDTO {

    private String user_name;
    private String phone_number;
    private String birthday;
    private String university;
    private String e_mail;
    private String location;

}
