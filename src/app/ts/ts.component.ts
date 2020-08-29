import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'style-ts',
  template: '<p>ts works!</p>',
  styles: [`p {color: yellow;}`]
})
export class TsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
