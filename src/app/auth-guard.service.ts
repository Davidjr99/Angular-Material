import { inject } from "@angular/core";
import { LoginService } from "./login.service";
import { Router } from "@angular/router";

export const AuthGuardService = () => {
  const loginService = inject(LoginService);

  const route = inject(Router);

  const usuario = loginService.getCurrentUser();
  console.log(usuario);
  if(usuario == null) {
    route.navigate(['']);
    return false;

  }else{
    return true;
  }

};
