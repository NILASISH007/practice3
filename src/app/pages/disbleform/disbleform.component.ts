import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-disbleform',
  templateUrl: './disbleform.component.html',
  styleUrls: ['./disbleform.component.css'],
})
export class DisbleformComponent implements OnInit {
  public disbaleform: any;


  constructor(private fb:FormBuilder){}

  ngOnInit(){

    this.disbaleform=this.fb.group({
      name:['',Validators.required]
    })

  }
  submit(){
    console.log(this.disbaleform.value);

  }
}
