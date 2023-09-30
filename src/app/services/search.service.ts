import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  search: string = '';

  Search(search: string) {
    this.search = search;
  }
}
