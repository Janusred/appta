import { Component } from '@angular/core';
import * as esMessages from "devextreme/localization/messages/es.json";
import { locale, loadMessages } from "devextreme/localization";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor() {
    loadMessages(esMessages);
    locale(navigator.language);
  }
}
