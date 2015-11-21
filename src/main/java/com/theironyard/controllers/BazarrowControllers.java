package com.theironyard.controllers;

import com.theironyard.entities.Item;
import com.theironyard.entities.User;
import com.theironyard.services.ItemRepository;
import com.theironyard.services.UserRepository;
import com.theironyard.util.PasswordHash;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;
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

    @PostConstruct
    public void init() throws InvalidKeySpecException, NoSuchAlgorithmException {
        User user = users.findOneByUsername("Ben");
        if (user ==  null) {
            user= new User();
            user.username = "Ben";
            user.password = PasswordHash.createHash("wtf");
            user.location = "location";
            user.email = "email";
            users.save(user);
        }
    }

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
    public void createProfile(HttpServletResponse response, String username, String password, String location, String email) throws InvalidKeySpecException, NoSuchAlgorithmException, IOException {
        User user = new User();
        user.username = username;
        user.password = PasswordHash.createHash(password);
        user.location = location;
        user.email = email;
        users.save(user);
        response.sendRedirect("/");
    }

    @RequestMapping("/create-item")
    public void createItem(HttpSession session, String username, String itemName, String category, String description, boolean isNeeded) throws Exception {
        User user = users.findOneByUsername(username);
        if (user == null){
            throw new Exception("Not Logged it");
        }
        Item item = new Item();
        item.user = user;
        item.itemName = itemName;
        item.category = category;
        item.isNeeded = isNeeded;
        item.description = description;
        items.save(item);

    }

    @RequestMapping("/users")
    public List<User>getUsers(){
        return (List<User>)users.findAll();
    }

    @RequestMapping("/items")
    public List<Item> getItems(String category){
        if (category != null) {
             return (List<Item>)items.findAllByCategory(category);
        }
        return (List<Item>)items.findAll();
    }

    @RequestMapping("/logout")
    public void logout(HttpSession session, HttpServletResponse response) throws IOException {
        session.invalidate();
        response.sendRedirect("/");
    }



}
