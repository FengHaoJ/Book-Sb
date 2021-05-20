package com.example.demo.interceptor;

import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
//配置登录拦截器
public class LoginHandlerInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response,
                             Object handler)throws Exception{
        Object user =request.getSession().getAttribute("root");
        if(user==null){
            request.setAttribute("msg","无权限，请登录");
            request.getRequestDispatcher("/index.html").forward(request,response);
            return false;
        }
        else {
            return true;
        }
    }
    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response,
                           Object handler, ModelAndView modelAndView)throws Exception{

    }
    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response,
                           Object handler, Exception ex)throws Exception{

    }
}
