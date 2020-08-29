import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `<button (click)='click()'>click-to-hide</button><table><tr><th>Colors</th></tr><tr><td>{{red}}</td></tr><tr><td>{{yellow}}</td></tr><tr><td>{{green}}</td></tr><tr><td [textContent]="blue">blue</td></tr><tr><td [textContent]="indigo">indigo</td></tr><tr><td [textContent]="violet">violet</td></tr></table>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cryptoin';
  red = "255,0,0";
  yellow = "255,255,0";
  green = "0,255,0";
  blue = "0,255,255"
  indigo = "0,0,255";
  violet = "255,0,255";

  click() {
    let e = document.querySelector("body > app-root > table") as HTMLElement;
    if (e.style.visibility == "hidden") {e.style.visibility = "visible";}
    else e.style.visibility = "hidden";
  }
}
