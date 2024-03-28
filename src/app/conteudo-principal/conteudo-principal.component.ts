import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'conteudo-principal',
  templateUrl: './conteudo-principal.component.html',
  styleUrl: './conteudo-principal.component.css'
})
export class ConteudoPrincipalComponent {
  message: string = '';

  constructor(private http: HttpClient) {}

  sendMessage() {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = {
      message: this.message,
      teste1: 'aaaaaaaaaaaaaaaa',
      teste2: 'bbbbbbbbbbbbbbbb'
    }

    this.http.post('https://formspree.io/f/mjvnagno', body, { headers }).subscribe({
      next: (result) => {
        console.log(result);
      }
    });
  }
}
