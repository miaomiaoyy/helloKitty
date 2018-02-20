import { User } from '../models/user.model.client';
import {Injectable} from '@angular/core';
import {AlertService} from './alert.service.client';

@Injectable()
export class UserService {
  users: User[] = [
    new User('123', 'alice', 'qq', 'Alice', 'Pitt'),
    new User('234', 'bob', 'qq', 'Bob', 'Delon'),
    new User('345', 'charlie', 'qq', 'Charlie', 'Joseph'),
    new User('666', 'yang', '224', 'Yang', 'Yuan')
  ];
  alertService: AlertService;
  createUser(user: User) {
    this.users.push(new User(user.uid, user.username, user.password, user.firstName, user.lastName));
  }

  findUserByCredential(username: String, password: String) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].username === username && this.users[i].password === password) {
        return this.users[i];
      }
  }
}

  findUserById(userId: String) {
    return this.users.find(function (user) {
      return user.uid === userId;
    });
  }

  updateUser(user: User) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].uid === user.uid) {
        this.users[i].firstName = user.firstName;
        this.users[i].lastName = user.lastName;
        return this.users[i];
      }
    }
  }

  deleteUser(userId: String) {
    for (const i in this.users) {
      if (this.users[i].uid === userId) {
        const j = +i;
        this.users.splice(j, 1);
        alert(this.alertService.success('delete Successful', true));
      }
    }
  }
}


