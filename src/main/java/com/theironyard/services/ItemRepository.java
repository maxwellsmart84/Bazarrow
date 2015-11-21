package com.theironyard.services;

import com.theironyard.entities.Item;
import com.theironyard.entities.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by benjamindrake on 11/19/15.
 */
public interface ItemRepository extends CrudRepository<Item, Integer> {
    Item findAllByCategory(String category);
    Item findOneByItemName(String itemName);
    List<Item> findAllByUser(User user);

}
