import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Task } from '../core/services/task';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './home.html',
  styleUrls: ['./home.css'], // <- styleUrls (pluriel)
})
export class HomeComponent {
  // Injection propre du service
  private readonly taskService = inject(Task);

  // Flux observable de tâches, utilisé dans le template
  readonly tasks$ = this.taskService.tasks$;

  addTask(title: string, description: string) {
    this.taskService.addTask(title, description);
  }
}
