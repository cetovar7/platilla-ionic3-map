import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateProvider } from "../../providers/translate/translate";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public Translate: TranslateProvider) {

  }

}
