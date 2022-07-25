package com.example.privateHomepage.repository;

import com.example.privateHomepage.domain.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserJPARepository extends JpaRepository<UserEntity, String> {
}
