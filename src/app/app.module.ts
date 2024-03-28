import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavbarModule } from './navbar/navbar.module';
import { ConteudoPrincipalComponent } from './conteudo-principal/conteudo-principal.component';
import { MinhasAnotacoesComponent } from './minhas-anotacoes/minhas-anotacoes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { CalendarioComponent } from './calendario/calendario.component';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { CadastroComponent } from './cadastro/cadastro.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { PopUpComponent } from './pop-up/pop-up.component';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from './error/error.component';



@NgModule({
  declarations: [
    AppComponent,
    ConteudoPrincipalComponent,
    MinhasAnotacoesComponent,
    CalendarioComponent,
    LoginComponent,
    CadastroComponent,
    PopUpComponent,
    ErrorComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    FormsModule,
    MatCardModule,
    MatDatepickerModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatListModule,
    HttpClientModule
  ],
  providers: [
    provideAnimationsAsync(),
    [provideNativeDateAdapter()]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
