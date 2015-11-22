package com.theironyard.services;

import com.theironyard.entities.ItemsHave;
import com.theironyard.entities.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by benjamindrake on 11/19/15.
 */
public interface ItemsHaveRepository extends CrudRepository<ItemsHave, Integer> {
    ItemsHave findAllByCategory(String category);
    ItemsHave findOneByItemName(String itemName);
    List<ItemsHave> findAllByUser(User user);

}
