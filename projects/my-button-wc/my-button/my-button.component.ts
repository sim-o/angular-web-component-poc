import {Component, HostBinding, ViewEncapsulation} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-my-button',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.css',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class MyButtonComponent {
  json?: string;

  @HostBinding('style')
  style = 'border: 1px solid red; display; inline-block; padding: 12px; margin: 12px;';

  doFetch() {
    fetch('http://localhost:8000/remote.json')
      .catch((e: Error) => this.json = e.message)
      .then((r) => r instanceof Response ? r.text() : r)
      .then(t => this.json = t);
  }
}
