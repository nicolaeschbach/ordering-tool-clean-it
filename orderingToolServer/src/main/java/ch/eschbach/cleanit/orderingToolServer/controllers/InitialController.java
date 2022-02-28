package ch.eschbach.cleanit.orderingToolServer.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/")
public class InitialController {

    @GetMapping
    public ResponseEntity<String> alive() {
        return new ResponseEntity<>("Server is running... " + LocalDateTime.now(), HttpStatus.OK);
    }
}
