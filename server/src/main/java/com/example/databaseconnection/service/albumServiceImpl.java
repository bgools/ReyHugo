package com.example.databaseconnection.service;

import com.example.databaseconnection.model.album;
import com.example.databaseconnection.repository.albumRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;

public class albumServiceImpl implements albumService {
    @Autowired
    albumRepository albumRepository;

    @Override
    public Iterable<album> listAlbums() {
        return albumRepository.findAll();
    }

    @Override
    public album createAlbum(album album) {
        return albumRepository.save(album);
    }

    @Override
    public album getAlbumById(Long id) {
        return albumRepository.findById(id).get();
    }

    @Override
    public HttpStatus deleteAlbumById(Long id) {
        albumRepository.deleteById(id);
        return HttpStatus.OK;
    }
}
