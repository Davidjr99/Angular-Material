import { Component } from '@angular/core';


import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { LoginService } from '../login.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(private loginService: LoginService){}



  onLogin(){
    const email = this.emailFormControl.value;
    if(email) {
      if (this.loginService.verifyUser(email)) {
        alert ('Cadastro realizado com sucesso!');
      } else {
        alert('Usuário não encontrado!');
      }
    } else {
      alert('Insira um email válido!')
    }

  }

}
