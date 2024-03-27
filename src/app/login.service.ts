import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import IUser from './interfaces/IUser';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  users: IUser[] = [];

  constructor(private router: Router) {
    this.loadUsers();
   }

   loadUsers(){
    const users = localStorage.getItem('users');
    if (users){
      this.users = JSON.parse(users);
    }
   }

   saveUsers(){
    localStorage.setItem('users', JSON.stringify(this.users));
   }

  verifyUser(user: IUser): boolean {
    const userFound = this.users.find(({ email, password}) => user.email == email && user.password == password);

    if (!userFound) {
      return false;
    } else {
      return true;
    }
  }

  addUser(user: IUser) {
    this.users.push(user);
    this.saveUsers();
  }
}
