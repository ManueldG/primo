import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-component',
  template: `
    <p>
      third-component Works!
    </p>
  `,
  styles: []
})
export class ThirdComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
