package com.theironyard.entities;

import org.springframework.web.multipart.MultipartFile;

import javax.persistence.*;

/**
 * Created by benjamindrake on 11/19/15.
 */
@Entity
@Table(name = "itemsHave")
public class ItemsHave {
    @Id
    @GeneratedValue
    @Column(nullable = false)
    public int id;

    @Column(nullable = false)
    public String category;

    @Column(nullable = false)
    public String itemName;

    @Column(nullable = false)
    public String photoName;

    @Column(nullable = false)
    public String description;

    @ManyToOne
    public User user;
}
