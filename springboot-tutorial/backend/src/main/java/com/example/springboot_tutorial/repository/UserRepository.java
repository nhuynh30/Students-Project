package com.example.springboot_tutorial.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springboot_tutorial.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
