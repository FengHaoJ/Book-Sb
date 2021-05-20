package com.example.demo.web;

import antlr.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.security.auth.Subject;
import javax.servlet.http.HttpSession;
import java.util.Map;

@Controller
public class LoginController {
    @PostMapping(value = "/login")
    public String login(@RequestParam("USERNAME") String USERNAME,
                        @RequestParam("PASSWORD") String PASSWORD,
                        Map<String,Object> map,
                        HttpSession session) {
        if ("root".equals(USERNAME) && "123456".equals(PASSWORD)) {
            session.setAttribute("root",USERNAME);
            return "redirect:main";
        } else {
            map.put("msg","用户名或密码错误");
            return "index";
        }
    }




}
