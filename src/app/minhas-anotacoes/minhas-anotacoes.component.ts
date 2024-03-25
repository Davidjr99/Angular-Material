import { Component } from '@angular/core';

@Component({
  selector: 'minhas-anotacoes',
  templateUrl: './minhas-anotacoes.component.html',
  styleUrl: './minhas-anotacoes.component.css'
})
export class MinhasAnotacoesComponent {

  tarefa: String = '';

tarefas: Array<String> =
['tarefa 1',
'tarefa 2',
'tarefa 3'];

adicionarTarefa() {
  this.tarefas.push(this.tarefa);
  this.tarefa = "";
}

}
