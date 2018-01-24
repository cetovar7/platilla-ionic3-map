import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MapPage } from "../pages/map/map";

import { TranslateService } from "@ngx-translate/core";
import { LoggedIn } from "../providers/dtos/dtos";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon: string}>;
  gEmail:any;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private events: Events,
    private loggedIn: LoggedIn,
    private translate: TranslateService) {


    this.initializeApp();
    this.iniTranslate();
    /** Actualiza el Perfil de la App con el correo del Usuario */
    events.subscribe('changedemail', (value) => {
      this.gEmail = value;
      this.loggedIn.Email = value;
    });


    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'MENU_TITLE_LIST', component: ListPage, icon: "contact" },
      { title: 'MENU_TITLE_MAP', component: MapPage, icon: "map" }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  iniTranslate() {

    let userLang = navigator.language.split('-')[0];
    userLang = /(es|en)/gi.test(userLang) ? userLang : 'es';

    /** Define por default el Lenguaje de la Aplicacion */
    this.translate.setDefaultLang('es');

    /** Espesifica el lenguaje selecionado para la aplicacion */
    this.translate.use(userLang);
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    switch (page.component.name) {
      case 'LoginPage':
        this.nav.setRoot(page.component, { logout: true });
        break;

      default:
        this.nav.push(page.component);
    }
  }
}
