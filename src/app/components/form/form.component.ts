import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  newEntry: any;
  validations: any = {
    title: false,
    text: false,
    image: false,
    date: false
  }
  now: Date = new Date();

  constructor() {
    this.resetForm();
   }

  ngOnInit(): void {
  }

  addEntry(): void {
    if(!this.validationFields()) {
      return;
    } 
    this.newEntry.image = 'https://picsum.photos/300';
    console.log(this.newEntry);
    this.resetForm();
  }

  validationFields(): boolean {
    this.validations = {
      title: false,
      text: false,
      image: false,
      date: false
    }
    if(this.newEntry.title === "") {
      this.validations.title = true;
    }
    if(this.newEntry.text === "") {
      this.validations.text = true;
    }
    if(this.newEntry.image === "") {
      this.validations.image = true;
    }
    if(this.newEntry.date === this.now) {
      this.validations.date = true;
    }
    return Object.values(this.validations).find(val => val === true) ? false : true;
  }

  resetForm(): void {
    this.newEntry = {
      title: "",
      text: "",
      image: "",
      date: this.now
    }
  }

}
