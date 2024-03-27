import { Router } from '@angular/router';
import { Component } from '@angular/core';


interface Task{
  id: Number;
  name: String;
}

@Component({
  selector: 'minhas-anotacoes',
  templateUrl: './minhas-anotacoes.component.html',
  styleUrl: './minhas-anotacoes.component.css'
})
export class MinhasAnotacoesComponent {

  tarefa: String = '';


tarefas: Task[] = [{ id: 1, name: 'Tarefa 1'}];
nextId: number = 2;

constructor(route: Router){}

adicionarTarefa() {
 const newTask: Task = {
  id: this.nextId,
  name: this.tarefa,
 };
 this.tarefas.push(newTask);
 this.tarefa = '';
 this.nextId++;
}

removerTarefa(taskId: Number) {
  this.tarefas = this.tarefas.filter(task => task.id !== taskId);


}
}
