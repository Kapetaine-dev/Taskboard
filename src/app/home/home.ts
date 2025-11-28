import { Component, OnInit, OnDestroy } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Task } from '../core/services/task';


@Component({
  selector: 'app-home',
  imports: [AsyncPipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  count = 0;
  
  tasks$!: ReturnType<Task['gettasks']>;
  private intervalId?: number;

  constructor(private taskService: Task) {
    this.tasks$ = this.taskService.gettasks();
  }

  ngOnInit() {
    this.intervalId = window.setInterval(() => {
      this.count++;
      console.log(`Compteur: ${this.count}`);
    }, 1000);
  }

  ngOnDestroy() {
    console.log('Composant Home détruit, arrêt du compteur.');
      clearInterval(this.intervalId);
    
  }

}
