package com.theironyard.services;

import com.theironyard.entities.Item;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by benjamindrake on 11/19/15.
 */
public interface ItemRepository extends CrudRepository<Item, Integer> {
    Item findOneByCategory(String category);
    Item findOneBy
}
