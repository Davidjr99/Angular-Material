import { Component } from '@angular/core';

import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import IUser from '../interfaces/IUser';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(private loginService: LoginService, private route: Router) {}

  onCadastro() {
    const email = this.emailFormControl.value;
    const password = this.passwordFormControl.value;

    if (!email || !password) {
      alert("Preencha os campos de email e senha!");
    } else {
      const user: IUser = {
        email,
        password,
        isLogged: false
      };
      this.loginService.addUser(user);
      this.route.navigate(['']);
    }

  }

}
