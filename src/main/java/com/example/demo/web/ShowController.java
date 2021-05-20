package com.example.demo.web;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ShowController {
    @RequestMapping("/")
    public String show(Model model) {
        return "show";
    }
}
