import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'unit-testing-hexa-may2021';

  add(a: number, b: number): number {
    return a + b;
  }
}
