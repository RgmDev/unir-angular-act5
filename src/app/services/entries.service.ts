import { Injectable } from '@angular/core';
import { ENTRIES } from '../db/entries.db';
import { Entry } from '../interfaces/entry.interface';

@Injectable({
  providedIn: 'root'
})
export class EntriesService {

  private arrEntries: Entry[] = [];

  constructor() { 
    this.arrEntries = ENTRIES;
  }

  getAll() : Entry[] {
    return this.arrEntries;
  }
}
