import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cryptoin';
  red = '255,0,0';
  yellow = '255,255,0';
  green = '0,255,0';
  blue = '0,255,255';
  indigo = '0,0,255';
  violet = '255,0,255';

  click() {
    let e = document.querySelector('body > app-root > table') as HTMLElement;
    if (e.style.visibility == 'hidden') {
      e.style.visibility = 'visible';
    } else e.style.visibility = 'hidden';
  }
}
