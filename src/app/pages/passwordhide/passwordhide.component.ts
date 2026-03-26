import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-passwordhide',
  templateUrl: './passwordhide.component.html',
  styleUrls: ['./passwordhide.component.css'],
})
export class PasswordhideComponent implements OnInit {
  public passwordhideFrom: any;
  showPassword: boolean = false;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initalizeFrom();
  }

  initalizeFrom() {
    this.passwordhideFrom = this.fb.group({
      password: ['', Validators.required],
    });
  }
  submit() {
    console.log(this.passwordhideFrom.value);
  }
  clear() {
    this.passwordhideFrom.reset();
  }
  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
