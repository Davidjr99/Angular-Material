import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import IUser from './interfaces/IUser';
import { _isNumberValue } from '@angular/cdk/coercion';


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

    return this.users;
   }

   saveUsers(usuario: IUser): void{
    const users = this.loadUsers();
    users.push(usuario)

    localStorage.setItem('users', JSON.stringify(users));
   }

   changeUser(usuario: IUser): void {
    let users = this.loadUsers();

    usuario.isLogged = true;
    users = users.filter((u) => u.email !== usuario.email);

    localStorage.setItem('users', JSON.stringify([...users, usuario]));
   }

  verifyUser(user: IUser): boolean {
    const userFound = this.users.find(({ email, password}) => user.email == email && user.password == password);

    if (!userFound) {
      return false;
    } else {
      this.changeUser(userFound)
      console.log(userFound);
      localStorage.setItem('currentUser',JSON.stringify(userFound));

      return true;
    }
  }

  verifyUserLogged(): void {
    const users = this.loadUsers();
    const userFound = users.find((u) => u.isLogged);
    if(userFound){
      localStorage.setItem('currentUser', JSON.stringify(userFound))
    }


  }

  addUser(user: IUser) {
    this.saveUsers(user);
  }

  isAuthenticated(): boolean {

    return this.users.length > 0;
  }

  getCurrentUser(): IUser | null {
    const currentUser = localStorage.getItem('currentUser');
    return currentUser ? JSON.parse(currentUser) : null;
  }
}
