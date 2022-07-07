import { Component, Input, OnInit } from '@angular/core';
import { Entry } from 'src/app/interfaces/entry.interface';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() entry: Entry | any;

  constructor() { }

  ngOnInit(): void {

  }

}
