package com.example.databaseconnection.repository;

import com.example.databaseconnection.model.album;
import org.springframework.data.repository.CrudRepository;

public interface albumRepository extends CrudRepository<album, Long> {
}
