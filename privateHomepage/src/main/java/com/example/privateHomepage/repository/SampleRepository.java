package com.example.privateHomepage.repository;

import com.example.privateHomepage.domain.Sample;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SampleRepository extends JpaRepository<Sample, Long> {





} //<sample (클래스 이름), String (pk의 자료형)>

