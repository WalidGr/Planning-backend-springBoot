package com.sagem.services;

import com.sagem.entity.AppRole;
import com.sagem.entity.AppUser;
import com.sagem.model.MessageResponse;


public interface AccountService {
    public MessageResponse saveUser(AppUser user);
    public MessageResponse update(AppUser user);
    public AppRole save(AppRole role);
    public AppUser loadUserByUsername(String username);
    public void addRoleToUser(String username,String rolename);
    public AppUser AddRole(String username,String rolename);


    AppUser findByUsername(String username);
}
