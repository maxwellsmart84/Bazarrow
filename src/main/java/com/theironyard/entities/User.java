package com.theironyard.entities;

import javax.persistence.*;

/**
 * Created by benjamindrake on 11/19/15.
 */
@Entity
@Table( name = "users")
public class User {
    @Id
    @GeneratedValue
    @Column(nullable = false)
    int id;

    @Column(nullable = false)
    public String name;

    @Column(nullable = false)
    public String password;

    @Column(nullable = false)
    public String location;


}
