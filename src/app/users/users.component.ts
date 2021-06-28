import {Component, OnInit} from '@angular/core';
import {UsersService} from '../service/users.service';
import {User} from '../model/User';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {AddusersComponent} from './addusers/addusers.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  p = 1;
  roles: any;
  term: any;
  listUser: User[];

  constructor(private UserService: UsersService, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.getRoles();
    this.dialog.afterAllClosed.subscribe(res => {
      this.getAllusers();
    });

    this.getAllusers();
  }

  getAllusers() {
    this.UserService.refrechList().subscribe(data => {
      this.listUser = data;
      this.UserService.refrechList();
    }, ex => {
      console.log(ex);
    });
  }

  onCreate() {
    const user = new User();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    dialogConfig.data = user;
    this.dialog.open(AddusersComponent, dialogConfig);
  }

  onEdit(user: User) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';

    const use = new User();
    Object.assign(use, user);
    dialogConfig.data = use;
    this.dialog.open(AddusersComponent, dialogConfig);
  }

  getRoles() {
    this.UserService.getAllRoles().subscribe(res => {
      console.log(res);
      this.roles = res;
      console.log(this.roles);
    });
  }


  onDe(id: number) {
    this.UserService.deleteUser(id).subscribe(res => {

      this.UserService.refrechList();
    });
  }

}
