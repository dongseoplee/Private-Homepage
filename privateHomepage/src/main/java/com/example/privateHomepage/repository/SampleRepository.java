package com.example.privateHomepage.repository;

import com.example.privateHomepage.domain.Sample;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SampleRepository extends JpaRepository<Sample, Long> {
} //자료형: sample 클래스

