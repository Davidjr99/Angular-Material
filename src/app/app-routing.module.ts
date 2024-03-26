import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { ConteudoPrincipalComponent } from './conteudo-principal/conteudo-principal.component';
import { MinhasAnotacoesComponent } from './minhas-anotacoes/minhas-anotacoes.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '', component: CadastroComponent,
  },
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: 'calendario', component: CalendarioComponent
  }

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
