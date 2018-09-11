import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(@Inject(DOCUMENT) document, r: Renderer2) {
    r.addClass(document.body, 'mat-app-background');
  }
  title = 'Tour of Heroes';
}
