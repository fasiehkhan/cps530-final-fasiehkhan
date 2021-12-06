package com.cps530_api.cps530;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DataController {

    @GetMapping("/pageone")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<PageData> getAllDataPageOne() {
        return PageDataService.getPageOneData();
    }
}
