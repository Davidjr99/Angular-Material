import { Component } from '@angular/core';


import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { LoginService } from '../login.service';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { Router } from '@angular/router';
import IUser from '../interfaces/IUser';

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
  contador: number = 0;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(private loginService: LoginService,
    private _bottomSheet: MatBottomSheet,
    private route: Router) {

    }

  onLogin(){
    const email = this.emailFormControl.value;
    const password = this.passwordFormControl.value;

    if (!email || !password) {
      alert("Digite os campos de email e senha!");
    } else {
      const user: IUser = {
        email,
        password
      };

      const result: boolean = this.loginService.verifyUser(user);

      if (!result ) {
        alert("Email ou senha inválidos!");
        this.contador += 1;

        if (this.contador >= 3) {
          this.openPopUp();
        }
      } else {
         this.route.navigate(['home']);
      }
    }

  }

  openPopUp(): void {
    this._bottomSheet.open(PopUpComponent);

  }

}
