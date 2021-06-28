package com.sagem.services;

import com.sagem.dao.AppRoleRepository;
import com.sagem.dao.AppUserRepository;
import com.sagem.entity.AppRole;
import com.sagem.entity.AppUser;

import com.sagem.model.MessageResponse;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional
public class AccountServiceImpl implements AccountService {

    private AppUserRepository appUserRepository;
    private AppRoleRepository appRoleRepository;
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public AccountServiceImpl(AppUserRepository appUserRepository, AppRoleRepository appRoleRepository, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.appUserRepository = appUserRepository;
        this.appRoleRepository = appRoleRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }






    @Override
    public MessageResponse saveUser(AppUser appUser) {
        AppUser  user =appUserRepository.findByUsername(appUser.getUsername());
        if(user!=null) {
            return new MessageResponse(false, "Attention", "Nom d'utilisateur existe déja");
        };


       appUser.setActived(true);

     appUser.setPassword(bCryptPasswordEncoder.encode(appUser.getPassword()));
        appUserRepository.save(appUser);

    // addRoleToUser(username,"EMPLOYEE");
        return new MessageResponse(true, "Succès", "Opération effectuée");
    }

    @Override
    public MessageResponse update(AppUser user) {

        boolean exist = appUserRepository.existsByIdAndUsername(user.getId(), user.getUsername());
        if(!exist) {
            exist = appUserRepository.existsByUsername(user.getUsername());
            if(exist) {
                return new MessageResponse(false, "Attention", "Nom d'utilisateur existe déja");
            }
        }

        appUserRepository.save(user);

        // addRoleToUser(username,"EMPLOYEE");
        return new MessageResponse(true, "Succès", "Opération effectuée");
    }

    @Override
    public AppUser AddRole(String username, String roleName) {
        AppUser  user=appUserRepository.findByUsername(username);
        AppRole appRole=appRoleRepository.findByRoleName(roleName);

              addRoleToUser(username,roleName);

       return user;
    }

    @Override
    public AppUser findByUsername(String username) {
        return appUserRepository.findByUsername(username);
    }


    @Override
    public AppRole save(AppRole role) {

        return appRoleRepository.save(role);
    }

    @Override
    public AppUser loadUserByUsername(String username) {

        return appUserRepository.findByUsername(username);
    }

    @Override
    public void addRoleToUser(String username, String roleName) {
        AppUser appUser=appUserRepository.findByUsername(username);
        AppRole appRole=appRoleRepository.findByRoleName(roleName);
        appUser.getRoles().add(appRole);

    }


}
