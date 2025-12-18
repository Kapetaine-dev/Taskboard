import { Component, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Task, TaskItem } from '../../../core/services/task';
import { TaskHighlight } from '../task-highlight/task-highlight';

@Component({
  selector: 'app-tasks-page',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './tasks-page.html',
  styleUrls: ['./tasks-page.css'],
})
export class TasksPage {
  private readonly taskService = inject(Task);
  readonly tasks$ = this.taskService.tasks$;

  addTask(title: string, description: string): void {
    this.taskService.addTask(title, description);
  }

  removeTask(id: number): void {
    this.taskService.removeTask(id);
  }

  @ViewChild('highlightContainer', { read: ViewContainerRef })
  container!: ViewContainerRef;

  highlight(task: TaskItem): void {
    this.container.clear();
    const ref = this.container.createComponent(TaskHighlight);
    ref.instance.title = task.title;
  }
}
