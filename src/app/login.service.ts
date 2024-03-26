import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  users: string[] = [];

  constructor() { }

  verifyUser(email: string): boolean {
    return this.users.includes(email);
  }

  addUser(email: string): void {
    this.users.push(email);
  }



}
