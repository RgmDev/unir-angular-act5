import { Component, Input, OnInit } from '@angular/core';
import { Entry } from 'src/app/interfaces/entry.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() entries: Entry[] | any;

  constructor() { }

  ngOnInit(): void {

  }

}
