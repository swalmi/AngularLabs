import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ObjectService } from '../services/object';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-put',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './put.html',
  styleUrl: './put.css',
})
export class Put {

  model = {
    id: 1,      // default 1
    title: '',
    body: '',
    userId: 1
  };

  response: any = null;
  errorMessage: string | null = null;
  successMessage: string | null = null;

  constructor(private objectService: ObjectService) {}

  submitForm() {
    const body = {
      title: this.model.title,
      body: this.model.body,
      userId: this.model.userId
    };

    this.objectService.updateObject(this.model.id, body).subscribe({
      next: (data) => {
        this.response = data;
        this.successMessage = 'Post successfully updated!';
        this.errorMessage = null;
        console.log("API PUT Response:", data);
      },
      error: (err) => {
        this.errorMessage = 'Failed to update post.';
        this.successMessage = null;
        console.error(err);
      },
    });
  }
}
