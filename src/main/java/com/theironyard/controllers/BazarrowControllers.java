package com.theironyard.controllers;

import com.theironyard.entities.ItemsHave;
import com.theironyard.entities.ItemsWant;
import com.theironyard.entities.User;
import com.theironyard.services.ItemsHaveRepository;
import com.theironyard.services.ItemsWantRepository;
import com.theironyard.services.UserRepository;
import com.theironyard.util.PasswordHash;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
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
    ItemsHaveRepository itemsHave;

    @Autowired
    ItemsWantRepository itemsWant;

    @PostConstruct
    public void init() throws InvalidKeySpecException, NoSuchAlgorithmException {
        if (users.count() >0) {
            return;
        }else {
            User user = new User();
            user.username = "Ben";
            user.password = PasswordHash.createHash("wtf");
            user.location = "location";
            user.email = "email";
            user.image = "http://i.imgur.com/CE4r5vR.jpg";
            users.save(user);
            ItemsHave item = new ItemsHave();
            item.itemName = "Dank bike helmet";
            item.description = "The dankest of bike helmets";
            item.category = "Dank sports";
            item.photoName = "tinfoil.jpeg";
            item.user = users.findOneByUsername("Ben");
            itemsHave.save(item);
            ItemsWant itemWant = new ItemsWant();
            itemWant.itemName = "Dank Bike";
            itemWant.category = "Dank Sports";
            itemWant.user = user;
            itemsWant.save(itemWant);
        }
    }

    @RequestMapping("/login")
    public void login(HttpSession session, HttpServletResponse response, String username, String password) throws Exception {
        User user = users.findOneByUsername(username);
        if (!PasswordHash.validatePassword(password, user.password)) {
            throw new Exception("Wrong Password");
        }
        else {
            session.setAttribute("username", username);
        }
    }

    @RequestMapping(path = "/users", method = RequestMethod.POST)
    public void createProfile(HttpServletResponse response, String username, String password, String location, String email) throws InvalidKeySpecException, NoSuchAlgorithmException, IOException {
        User user = new User();
        user.username = username;
        user.password = PasswordHash.createHash(password);
        user.location = location;
        user.email = email;
        users.save(user);
        response.sendRedirect("/#profile");
    }

    @RequestMapping("/create-itemHave")
    public void createItemHave(HttpSession session, String username, String itemName, String category, String description) throws Exception {
        User user = users.findOneByUsername(username);
        if (user == null){
            throw new Exception("Not Logged it");
        }
        ItemsHave item = new ItemsHave();
        item.user = user;
        item.itemName = itemName;
        item.category = category;
        item.description = description;
        itemsHave.save(item);

    }

    @RequestMapping("/create-itemWant")
    public void createItemWant(HttpSession session, String username, String itemName, String category) throws Exception {
        User user = users.findOneByUsername(username);
        if (user == null){
            throw new Exception("Not Logged it");
        }
        ItemsWant itemWant = new ItemsWant();
        itemWant.user = user;
        itemWant.itemName = itemName;
        itemWant.category = category;
        itemsWant.save(itemWant);
    }

    @RequestMapping(path = "/users", method = RequestMethod.GET)
    public List<User>getUsers(){
        return (List<User>)users.findAll();
    }

    @RequestMapping("/itemsHave")
    public List<ItemsHave> getItems(String category){

        return (List<ItemsHave>)itemsHave.findAll();
    }

    @RequestMapping("/itemsWant")
    public List<ItemsWant> getItemsWant(String category){

        return (List<ItemsWant>)itemsWant.findAll();
    }

    @RequestMapping("/logout")
    public void logout(HttpSession session, HttpServletResponse response) throws IOException {
        session.invalidate();
        response.sendRedirect("/");
    }

    @RequestMapping("/delete-user")
    public void deleteUser(int id){

        users.delete(id);
    }

    @RequestMapping("/delete-itemHave")
    public void deleteItem(int id) {
        itemsHave.delete(id);
    }

    @RequestMapping("/delete-itemWant")
    public void deleteItemWant(int id) {
        itemsHave.delete(id);
    }

}
