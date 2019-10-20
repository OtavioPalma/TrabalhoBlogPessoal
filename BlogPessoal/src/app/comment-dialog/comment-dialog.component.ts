import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-comment-dialog',
  templateUrl: './comment-dialog.component.html',
  styleUrls: ['./comment-dialog.component.css']
})
export class CommentDialogComponent implements OnInit {
  editForm: FormGroup;

  title: string;
  body: string;
  user_email: string;
  comment_id: number;

  constructor(
    private _api: ApiService,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<CommentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    this.title = data.title;
    this.body = data.body;
    this.user_email = data.email;
    this.comment_id = data.id;
  }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      'title': [this.title, Validators.required],
      'body': [this.body, Validators.required],
      'email': [this.user_email, Validators.required]
    });

  }

  save() {
    this.dialogRef.close(this.editForm.value);
  }

  close() {
    this.dialogRef.close();
  }

}
