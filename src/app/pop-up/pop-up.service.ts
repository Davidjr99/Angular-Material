import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {

  constructor() { }

  // getMailtoLink(){
  //   let subject = encodeURIComponent("Erro no login?");
  //   let body = encodeURIComponent("Descreva o problema aqui!");
  //   return `mailto:davidjunior3010@gmail.com?subject=${subject}&body=${body}`;

  // }

  getWhatsAppLink(){
    let phone = "11990042878";
    let text = encodeURIComponent("Eu tenho um problema com o login no CalenDaily, pode me ajudar?");
    return `https://wa.me/${phone}?text=${text}`;
  }
}
