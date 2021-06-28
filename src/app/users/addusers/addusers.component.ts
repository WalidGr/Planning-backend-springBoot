import {Component, Inject, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {UsersService} from '../../service/users.service';
import {User} from '../../model/User';
import {Roles} from '../../model/Roles';
import {Cie} from '../../model/cie';
import {NgxNotificationService} from 'ngx-notification';

@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrls: ['./addusers.component.css']
})
export class AddusersComponent implements OnInit {
  emp: User;
  roles: any;
  listRoles: Roles[];
  user: User = new User();
  confirmPassword;
  constructor(private serviceUser: UsersService, private dialog: MatDialog,
              public dialogRef: MatDialogRef<AddusersComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private ngxNotificationService: NgxNotificationService) {
  }

  ngOnInit() {
    this.getRoles();
    this.user = this.data;
    console.log(this.user);
    this.serviceUser.refrechList();


  }

  customCompareHobby(o1: Roles, o2: Roles) {
    if (o1 && o2) {
      return o1.id === o2.id;
    }
    return false;
  }

  onClose() {

    this.dialogRef.close();
  }


  getRoles() {
    this.serviceUser.getAllRoles().subscribe(res => {
      console.log(res);
      this.roles = res;
      console.log(this.roles);
    });
  }


  onSubmit(form: NgForm) {

    if (form.value.id == null) {
      this.insertRecord();
    } else {
      this.updateRecord();
    }

    this.onClose();
  }

  insertRecord() {
    this.serviceUser.PostUser(this.user).subscribe(res => {
      if (res.success) {
        this.ngxNotificationService.sendMessage(res.message + ' : ' + res.detail, 'success', 'bottom-right');
      } else {
        this.ngxNotificationService.sendMessage(res.message + ' : ' + res.detail, 'warning', 'bottom-right');
      }
    }, ex => {
      this.ngxNotificationService.sendMessage('Erreur : opération non effectuée' , 'error', 'bottom-right');

    });
  }


  updateRecord() {

    this.serviceUser.putUser(this.user).subscribe(res => {
      if (res.success) {
        this.ngxNotificationService.sendMessage(res.message + ' : ' + res.detail, 'success', 'bottom-right');
      } else {
        this.ngxNotificationService.sendMessage(res.message + ' : ' + res.detail, 'warning', 'bottom-right');
      }
    }, ex => {
      this.ngxNotificationService.sendMessage('Erreur : opération non effectuée' , 'error', 'bottom-right');
    });
  }


}
