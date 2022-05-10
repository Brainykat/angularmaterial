import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  template: `
    <button mat-button>Click Me!</button>

<button mat-button color="accent">Accent</button>

<div class="example-button-container">
  <button mat-fab color="warn" aria-label="Example icon button with a home icon">
    <mat-icon>face</mat-icon>
  </button>
  <mat-checkbox>Check please</mat-checkbox>
</div>
  `,
  styles: [
  ]
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
