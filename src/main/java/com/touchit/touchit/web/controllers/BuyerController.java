package com.touchit.touchit.web.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class BuyerController {
    @GetMapping("/")
    public String Search(){
        return "index";
    }
}
