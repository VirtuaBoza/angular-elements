import { Component, EventEmitter, Input, Output } from '@angular/core';
import '@angular/material/prebuilt-themes/indigo-pink.css';

interface Form {
  subject: string;
  body: string;
  user: string;
}

@Component({
  selector: 'fancy-form',
  styles: [
    `
      .container {
        max-width: 500px;
      }

      .title {
        font-family: sans-serif;
      }

      .form {
        display: flex;
        flex-direction: column;
      }

      .submit-container {
        text-align: right;
      }
    `,
  ],
  template: `
    <div class="container">
      <p class="title">We want to hear from you, {{ username }}!</p>
      <div class="form">
        <mat-form-field>
          <input matInput placeholder="Subject" [(ngModel)]="subject" />
        </mat-form-field>
        <mat-form-field>
          <textarea
            matInput
            placeholder="What would you like us to know?"
            rows="6"
            [(ngModel)]="body"
          ></textarea>
        </mat-form-field>
        <div class="submit-container">
          <button mat-raised-button color="primary" (click)="handleSubmit()">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  `,
})
export class FancyFormComponent {
  @Input() username: string;
  @Output() customSubmit: EventEmitter<Form> = new EventEmitter();
  subject = '';
  body = '';

  handleSubmit() {
    this.customSubmit.emit({
      subject: this.subject,
      body: this.body,
      user: this.username,
    });
  }
}
