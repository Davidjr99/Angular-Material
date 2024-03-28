import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { ConteudoPrincipalComponent } from './conteudo-principal/conteudo-principal.component';
import { MinhasAnotacoesComponent } from './minhas-anotacoes/minhas-anotacoes.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent,
  },

  {
    path: 'home', component: ConteudoPrincipalComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'conteudo-principal', component: ConteudoPrincipalComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'minhas-anotacoes', component: MinhasAnotacoesComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'cadastro', component: CadastroComponent,
  },

  {
    path: 'calendario', component: CalendarioComponent, canActivate: [AuthGuardService]
  },
  { path: '**', component: ErrorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  constructor( private router: Router){

  }
  navigateTo(path: string){
    this.router.navigate([path]);
  }
}
