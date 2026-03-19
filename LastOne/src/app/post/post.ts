import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ObjectService } from '../services/object';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './post.html',
  styleUrl: './post.css',
})
export class Post {

  model = {
    userId: null,
    title: '',
    body: ''
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

    this.objectService.createObject(body).subscribe({
      next: (data) => {
        this.response = data;
        this.successMessage = 'Post successfully created!';
        this.errorMessage = null;
        console.log("API Response:", data);
      },
      error: (err) => {
        this.errorMessage = 'Failed to create post. Try again.';
        this.successMessage = null;
        console.error(err);
      },
    });
  }
}
