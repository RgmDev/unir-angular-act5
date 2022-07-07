import { Component, OnInit } from '@angular/core';
import { Entry } from 'src/app/interfaces/entry.interface';
import { EntriesService } from 'src/app/services/entries.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  entries: Entry[] | any;

  constructor(
    private entriesServices: EntriesService
  ) { }

  ngOnInit(): void {
    this.entries = this.entriesServices.getAll();
  }

}
