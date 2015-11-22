package com.theironyard.services;

import com.theironyard.entities.ItemsWant;
import com.theironyard.entities.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by holdenhughes on 11/22/15.
 */
public interface ItemsWantRepository extends CrudRepository<ItemsWant, Integer> {
    ItemsWant findAllByCategory(String category);
    ItemsWant findOneByItemName(String itemName);
    List<ItemsWant> findAllByUser(User user);
}
