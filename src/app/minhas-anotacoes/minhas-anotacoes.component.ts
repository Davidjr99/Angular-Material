import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


interface Task{
  id: number;
  name: String;
}

@Component({
  selector: 'minhas-anotacoes',
  templateUrl: './minhas-anotacoes.component.html',
  styleUrl: './minhas-anotacoes.component.css'
})
export class MinhasAnotacoesComponent {

  tarefa: String = '';


tarefas: Task[] = [];
nextId: number = 1;

editingId: Number | null = null;

constructor(route: Router){
  this.carregarTarefas();
}

adicionarTarefa() {
  if(this.editingId !== null){
    const task = this.tarefas.find(task => task.id === this.editingId);
    if(task){
      task.name = this.tarefa;
      this.tarefa = '';
      this.editingId = null;
    }
  } else {
    const newTask: Task = {
      id: this.nextId,
      name: this.tarefa,
    };
    this.tarefas.push(newTask);
    this.tarefa = '';
    this.nextId++;
  }
  this.salvarTarefas();
}


// adicionarTarefa() {
//  const newTask: Task = {
//   id: this.nextId,
//   name: this.tarefa,
//  };
//  this.tarefas.push(newTask);
//  this.tarefa = '';
//  this.nextId++;
//  this.salvarTarefas();
// }

removerTarefa(taskId: Number) {
  this.tarefas = this.tarefas.filter(task => task.id !== taskId);
  this.salvarTarefas();
}
salvarTarefas(){
  localStorage.setItem('tarefas',JSON.stringify(this.tarefas));
}

carregarTarefas(){
  const tarefasSalvas = localStorage.getItem('tarefas');
  if(tarefasSalvas){
    this.tarefas = JSON.parse(tarefasSalvas);
    this.nextId = this.tarefas.length > 0 ? Math.max(0, ...this.tarefas.map(t => t.id)) + 1 : 1;
  }
}
editarTarefa(taskId: Number){
    const task = this.tarefas.find(task => task.id === taskId);
    if(task){
      this.tarefa = task.name;
      this.editingId = taskId;
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tarefas, event.previousIndex, event.currentIndex);
    this.salvarTarefas();
  }

}

