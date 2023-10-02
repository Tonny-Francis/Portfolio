import { Component } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent {
  faPlus = faPlus;

  webSize() {
    if (window.innerWidth < 768) {
      return false;
    }

    return true;
  }
}
