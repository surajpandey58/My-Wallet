import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  form: FormGroup;
    
  date = new FormControl("", Validators.required);
  description = new FormControl("", Validators.required);
  amount = new FormControl("", Validators.required);
  
  constructor(fb: FormBuilder) {
      this.form = fb.group({
          "date": this.date,
          "description": this.description,
          "amount": this.amount
      });
  }
  onSubmit() {
    alert("Added Successfully !!!");
  }

  /*--------------// Date //-------------*/
  d = new Date();
  dd = (this.d.getDate() < 10 ? '0' : '') + this.d.getDate();
  mm = ((this.d.getMonth() + 1) < 10 ? '0' : '') + (this.d.getMonth() + 1);
  yyyy = this.d.getFullYear();
  hh = this.d.getHours();
  min = this.d.getMinutes();
  cMeridiem = ((this.hh < 12)? "AM" : "PM");
  
  cDate = this.dd + "/" + this.mm + "/" + this.yyyy;
  cTime = this.hh + ":" + this.min + " " + this.cMeridiem;
  cDateTime = this.dd + "/" + this.mm + "/" + this.yyyy + " " + this.hh + ":" + this.min + " " + this.cMeridiem;
  /*--------------// Date End //-------------*/
  
  ngOnInit() {
  }
}
