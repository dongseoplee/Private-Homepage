package com.example.privateHomepage.repository;

import com.example.privateHomepage.domain.Sample;
import com.example.privateHomepage.dto.UserDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SampleRepository extends JpaRepository<Sample, Long> {
    //#{entityName} <- 자동으로 entity type을 참고한다. 여기서 entity type은 Sample

    //nativeQuery = true 이어야 DB에서 쿼리문 작성하는 방식으로 작성가능하다.
    @Query(value = "select * from user_table_test where number = :number", nativeQuery = true)
    public List<Sample> findAllByUserNumber(Long number);




} //<sample (클래스 이름), String (pk의 자료형)>

