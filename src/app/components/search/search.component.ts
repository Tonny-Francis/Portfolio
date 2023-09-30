import { Component } from '@angular/core';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { SearchService } from 'src/app/services/search.service';


@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(
    private searchService: SearchService
  ) { }

  faPlane = faPaperPlane

  search: string = '';

  onSubmit() {
    this.searchService.Search(this.search);
    this.search = '';
  }
}
