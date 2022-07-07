import { Component, OnInit } from '@angular/core';
import { EntriesService } from 'src/app/services/entries.service';

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

  constructor(
    private entriesServices: EntriesService
  ) {
    this.resetForm();
   }

  ngOnInit(): void {
    
  }

  addEntry(): void {
    if(!this.validationFields()) {
      return;
    } 
    this.newEntry.image = 'https://picsum.photos/300?random='+Math.floor(Math.random() * 100);
    this.newEntry.date = new Date(this.newEntry.date);
    this.entriesServices.create(this.newEntry);
    this.resetForm();
    alert('Has agregado una noticia');
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
