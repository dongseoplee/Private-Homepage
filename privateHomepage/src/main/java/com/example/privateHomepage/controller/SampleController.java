package com.example.privateHomepage.controller;

import com.example.privateHomepage.domain.Sample;
import com.example.privateHomepage.service.SampleService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class SampleController {

    private final SampleService sampleService;

    @GetMapping(value = "/samples")
    public List<Sample> getSamples() {
        return sampleService.getSamples();
    }

}
