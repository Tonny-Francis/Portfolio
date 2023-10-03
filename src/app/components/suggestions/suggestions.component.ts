import { Component } from '@angular/core';
import { faPaperPlane, faPlus } from '@fortawesome/free-solid-svg-icons';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent {
  faPlus = faPlus;
  faPlane =faPaperPlane;

  suggestionsStyle = "";

  suggestions = [
    {
      title: "About Me",
      description: "I'm a software developer <br> and student of...",
    },
    {
      title: "Experience",
      description: "My career highlights, <br> focusing on..."
    },
    {
      title: 'Projects',
      description: "Notable projects I've <br> been a part of..."
    },
    {
      title: "Skills",
      description: "My technical skills and <br> proficiency..."
    },
    {
      title: "Contacts",
      description: "How to reach me for <br> opportunities..."
    },
    {
      title: "CV",
      description: "My comprehensive resume, <br> detailing my..."
    }
  ];

  constructor(
    private searchService: SearchService
  ) { }

  search(search: string) {
    this.suggestionsStyle = "none";

    this.searchService.Search(search);
  }

  webSize() {
    if (window.innerWidth < 768) {
      return false;
    }

    return true;
  }
}
