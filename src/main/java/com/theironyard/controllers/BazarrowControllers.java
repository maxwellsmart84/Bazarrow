package com.theironyard.controllers;

import com.theironyard.entities.User;
import com.theironyard.services.ItemRepository;
import com.theironyard.services.UserRepository;
import com.theironyard.util.PasswordHash;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Created by benjamindrake on 11/19/15.
 */
@RestController
public class BazarrowControllers {
    @Autowired
    UserRepository users;

    @Autowired
    ItemRepository items;

    @RequestMapping("/login")
    public User login(HttpSession session, HttpServletResponse response, String username, String password) throws Exception {
        User user = users.findOneByUsername(username);
        if (!PasswordHash.validatePassword(password, user.password)) {
            throw new Exception("Wrong password.");
        }

        session.setAttribute("username", username);
        response.sendRedirect("/");

        return user;
    }
}
