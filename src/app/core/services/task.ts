import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Task {
  private tasks = [
    { id: 1, title: 'Tache unoo', description: 'Faire le truc 1' },
    { id: 2, title: 'Tache deux', description: 'Faire le truc 2' },
    { id: 3, title: 'Tache trois', description: 'Faire le truc 3' },
  ]
  gettasks() {
    return of(this.tasks).pipe(delay(2000)); // simule un délai de 2 secondes
  }
  
}
