import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-form-element',
  templateUrl: './add-form-element.component.html',
  styleUrls: ['./add-form-element.component.css'],
})
export class AddFormElementComponent implements OnInit {
  form: any;

  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.form = this.fb.group({
      name: [''],
    });
  }

  addEmail() {
    this.form.addControl(
      'email',
      this.fb.control('',[Validators.required])
    )
  }

  removeEmail(){
    this.form.removeControl('email')
  }
}
