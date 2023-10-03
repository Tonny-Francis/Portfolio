import { Component } from '@angular/core';
import { faPaperPlane, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent {
  faPlus = faPlus;
  faPlane =faPaperPlane;

  webSize() {
    if (window.innerWidth < 768) {
      return false;
    }

    return true;
  }
}
