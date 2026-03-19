import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectService } from '../services/object';

@Component({
  selector: 'app-get',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get.html',
  styleUrl: './get.css',
})
export class Get {

  title = signal('Timeline');
objects = signal<any>([]);

  constructor(private objectService: ObjectService) {
    this.loadObjects();
  }

  loadObjects() {
    this.objectService.getAllObjects().subscribe({
      next: (data) => {
        this.objects.set(data);
        console.log('Data:', data);
      },
      error: (err) => console.error(err),
    });
  }
}
