package com.sagem.controller;

import com.sagem.dao.AppRoleRepository;
import com.sagem.dao.AppUserRepository;
import com.sagem.entity.AppRole;
import com.sagem.entity.AppUser;
import com.sagem.model.MessageResponse;
import com.sagem.services.AccountService;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    private AccountService accountService;
    @Autowired
    private AppUserRepository appUserRepository;
    @Autowired
    private AppRoleRepository appRoleRepository;

    @PostMapping("/register")
    public MessageResponse register(@RequestBody AppUser user) {

        return accountService.saveUser(user);

    }

    @PutMapping("/updateUser")
    public MessageResponse update(@RequestBody AppUser user) {

        return accountService.update(user);

    }

    @GetMapping("/users")
    public List<AppUser>getList(){
        return appUserRepository.findAll();
    }

    @GetMapping("/username/{username}")
    public AppUser getByUsername(@PathVariable String username) {
        return  accountService.findByUsername(username);
    }
    
   @GetMapping("roles")
    public List<AppRole> getAppRoles(){
        return appRoleRepository.findAll();
   }



    @DeleteMapping("/users/{id}")
    public void delete(@PathVariable(name = "id")Long id){

        appUserRepository.deleteById(id);
    }



}
