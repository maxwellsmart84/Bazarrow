package com.theironyard.entities;

import org.springframework.web.multipart.MultipartFile;

import javax.persistence.*;

/**
 * Created by benjamindrake on 11/19/15.
 */
@Entity
@Table(name = "items")
public class Item {
    @Id
    @GeneratedValue
    @Column(nullable = false)
    public int id;

    @Column(nullable = false)
    public String category;

    @Column(nullable = false)
    public String itemName;

   // @Column(nullable = false)
    //public String originalName;

    //@Column(nullable = false)
    //public String name;

    @Column(nullable = false)
    public String description;

    @Column(nullable = false)
    public boolean isNeeded;

    @ManyToOne
    public User user;
}
