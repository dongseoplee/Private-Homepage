package com.example.privateHomepage.controller;

import com.example.privateHomepage.domain.Sample;
import com.example.privateHomepage.service.SampleService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "*") //cors 해결 모든 주소에 대해 접근 허용함
@RestController
@RequiredArgsConstructor
public class SampleController {

    private final SampleService sampleService;

    @GetMapping(value = "/privateHomepage/user")
    public List<Sample> getSamples() {
        return sampleService.getSamples();
    }


    @GetMapping(value = "/privateHomepage/user/{number}")
    public List<Sample> getSamples(@PathVariable Long number) {
        return sampleService.getSamplesByUserName(number);
    }


    /*
    @GetMapping(value = "/samples/{userName}")
    public List<Sample> getSamplesByUserName(@PathVariable String userName) {
        return sampleService.getSamplesByUserName(userName);
    }
    */


}
