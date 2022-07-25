package com.example.privateHomepage.service;

import com.example.privateHomepage.domain.Sample;
import com.example.privateHomepage.repository.SampleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SampleService {

    private final SampleRepository sampleRepository;

    public List<Sample> getSamples() {
        return sampleRepository.findAll();
    }
}
