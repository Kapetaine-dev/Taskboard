// src/app/features/tasks/tasks-page/tasks-page.ts
import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Task, TaskItem } from '../../../core/services/task';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tasks-page',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './tasks-page.html',
  styleUrls: ['./tasks-page.css'],
})
export class TasksPage {
  private readonly taskService = inject(Task);
  readonly tasks$: Observable<TaskItem[]> = this.taskService.tasks$;

  addTask(title: string, description: string): void {
    if (!title.trim()) {
      return;
    }
    this.taskService.addTask(title, description);
  }
  removeTask(id: number) {
  this.taskService.removeTask(id);
}

}
