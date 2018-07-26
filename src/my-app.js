import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class MyApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h1>Hello World!</h1>
    `;
  }

  static get properties() {
    return {
    };
  }

  static get observers() {
    return [
    ];
  }
}

window.customElements.define('my-app', MyApp);
