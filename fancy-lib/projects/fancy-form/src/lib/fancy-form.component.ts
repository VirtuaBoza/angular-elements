import { Component, EventEmitter, Input, Output } from '@angular/core';
import '@angular/material/prebuilt-themes/indigo-pink.css';

interface Form {
  subject: string;
  body: string;
  user: string;
}

@Component({
  selector: 'lib-fancy-form',
  template: `
    <p style="font-family: sans-serif;">
      We want to hear from you, {{ username }}!
    </p>
    <div style="display: flex; flex-direction: column;">
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
      <div style="text-align: right;">
        <button mat-raised-button color="primary" (click)="handleSubmit()">
          SUBMIT
        </button>
      </div>
    </div>
  `,
  styles: [],
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
