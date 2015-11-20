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
import java.io.IOException;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.util.List;

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
    public void login(HttpSession session, HttpServletResponse response, String username, String password) throws Exception {
        User user = users.findOneByUsername(username);
        if (!PasswordHash.validatePassword(password, user.password)) {
            response.sendRedirect("/create-profile");
        }
        else {
            session.setAttribute("username", username);
            response.sendRedirect("/");
        }
    }

    @RequestMapping("/create-profile")
    public void createProfile(HttpServletResponse response, String username, String password, String location) throws InvalidKeySpecException, NoSuchAlgorithmException, IOException {
        User user = new User();
        user.name = username;
        user.password = PasswordHash.createHash(password);
        user.location = location;
        users.save(user);
        response.sendRedirect("/");
    }

    @RequestMapping("/users")
    public List<User>getUsers(){
        return (List<User>)users.findAll();
    }

}
