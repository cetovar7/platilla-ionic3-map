import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';
import { TranslateProvider } from "../../providers/translate/translate";

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  map: GoogleMap;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private googleMaps: GoogleMaps,
    public Translate: TranslateProvider) {
  }

  ionViewDidEnter() {
    this.loadMap();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
  }

  loadMap() {

    let mapOptions: GoogleMapOptions = {
      controls:{
        compass:true,
        myLocationButton:true,
        indoorPicker:true,
        zoom:true
      },
      camera: {
        target: {
          lat: 10.489990, // default location
          lng: -66.855976 // default location
        },
        zoom: 13,
        tilt: 30
      }
    };

    console.log(mapOptions);

    this.map = this.googleMaps.create('map_canvas', mapOptions);

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      this.getPosition();
    }).catch(error => {
      console.log(error);
    });

  }

  getPosition(): void {

    this.map.getMyLocation().then(response => {

      this.map.moveCamera({
        target: response.latLng
      });

      this.map.addMarker({
        title: 'My Position',
        animation: 'DROP',
        position: response.latLng
      });

    }).catch(error => {
      console.log(error);
    });
  }


}
