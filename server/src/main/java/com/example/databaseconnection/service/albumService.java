package com.example.databaseconnection.service;

import com.example.databaseconnection.model.album;
import org.springframework.http.HttpStatus;

public interface albumService {
    Iterable<album> listAlbums();
    album createAlbum(album album);
    album getAlbumById(Long id);
    HttpStatus deleteAlbumById(Long id);
}
