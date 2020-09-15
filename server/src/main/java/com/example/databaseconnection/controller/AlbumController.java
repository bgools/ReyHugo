package com.example.databaseconnection.controller;


import com.example.databaseconnection.model.album;
import com.example.databaseconnection.service.albumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/albums")

public class AlbumController {
    @Autowired
    albumService albumService;

    @GetMapping
    public Iterable<album> listAllAlbums() {
        return albumService.listAlbums();
    }

    @PostMapping
    public album createAlbum(@RequestBody album album) {
        return albumService.createAlbum(album);
    }

    @GetMapping("/{id}")
    public album getAlbumById(@PathVariable Long id) {
        return albumService.getAlbumById(id);
    }

    @DeleteMapping("/{id}")
    public HttpStatus deleteAlbum(@PathVariable Long id) {
        return albumService.deleteAlbumById(id);
    }
}
