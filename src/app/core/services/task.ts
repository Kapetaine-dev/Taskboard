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
    { id: 1, title: 'Tache unoo', description: 'Faire le truc 1' },
    { id: 2, title: 'Tache deux', description: 'Faire le truc 2' },
    { id: 3, title: 'Tache trois', description: 'Faire le truc 3' },
  ];

  private lastId = 3;

  private tasksSubject = new BehaviorSubject<TaskItem[]>(this.tasks);
  tasks$ = this.tasksSubject.asObservable();

  addTask(title: string, description: string) {
    const newTask: TaskItem = { id: ++this.lastId, title, description };
    this.tasks = [...this.tasks, newTask];
    this.tasksSubject.next(this.tasks);
  }
}
