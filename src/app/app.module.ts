import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavbarModule } from './navbar/navbar.module';
import { ConteudoPrincipalComponent } from './conteudo-principal/conteudo-principal.component';
import { MinhasAnotacoesComponent } from './minhas-anotacoes/minhas-anotacoes.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { CalendarioComponent } from './calendario/calendario.component';
import {provideNativeDateAdapter} from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    ConteudoPrincipalComponent,
    MinhasAnotacoesComponent,
    CalendarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    FormsModule,
    MatCardModule,
    MatDatepickerModule
  ],
  providers: [
    provideAnimationsAsync(),
    [provideNativeDateAdapter()]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
