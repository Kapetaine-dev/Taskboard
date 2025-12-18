import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-highlight',
  standalone: true,
  template: `
    <div class="task-highlight">
      <h3>Tâche mise en avant</h3>
      <p>{{ title }}</p>
    </div>
  `,
  styleUrls: ['./task-highlight.css'],
})
export class TaskHighlight {
  @Input() title = '';
}
