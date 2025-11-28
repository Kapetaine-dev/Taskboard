// src/app/core/services/task.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface TaskItem {
  id: number;
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class Task {
  private tasks: TaskItem[] = [
    { id: 1, title: 'Tâche uno', description: 'Faire le truc 1' },
    { id: 2, title: 'Tâche deux', description: 'Faire le truc 2' },
    { id: 3, title: 'Tâche trois', description: 'Faire le truc 3' },
  ];

  private lastId = 3;

  private tasksSubject = new BehaviorSubject<TaskItem[]>(this.tasks);
  readonly tasks$ = this.tasksSubject.asObservable();

  addTask(title: string, description: string) {
    const newTask: TaskItem = { id: ++this.lastId, title, description };
    this.tasks = [...this.tasks, newTask];
    this.tasksSubject.next(this.tasks);
  }
  removeTask(id: number): void {
  this.tasks = this.tasks.filter(t => t.id !== id);
  this.tasksSubject.next(this.tasks);
}

}
