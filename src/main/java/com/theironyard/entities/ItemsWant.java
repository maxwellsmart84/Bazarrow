package com.theironyard.entities;

import javax.persistence.*;

/**
 * Created by holdenhughes on 11/22/15.
 */
@Entity
@Table(name = "itemsWant")
public class ItemsWant {
    @Id
    @GeneratedValue
    @Column(nullable = false)
    public int id;

    @Column(nullable = false)
    public String category;

    @Column(nullable = false)
    public String itemName;

    @ManyToOne
    public User user;

}
