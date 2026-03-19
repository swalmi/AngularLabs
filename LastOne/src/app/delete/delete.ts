import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ObjectService } from '../services/object';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './delete.html',
  styleUrl: './delete.css',
})
export class Delete {

  id: number = 1;  // default 1
  responseMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private objectService: ObjectService) {}

  submitForm() {
    if (!this.id) {
      this.errorMessage = 'Please enter the ID to delete';
      this.responseMessage = null;
      return;
    }

    this.objectService.deleteObject(this.id).subscribe({
      next: () => {
        this.responseMessage = `Post with ID = ${this.id} has been successfully deleted.`;
        this.errorMessage = null;
        console.log('Delete Response: success');
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Error deleting post.';
        this.responseMessage = null;
      }
    });
  }
}
