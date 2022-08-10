import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { NavController, ToastController, ActionSheetController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import mapbox from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

declare var mapboxgl: any;

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.page.html',
  styleUrls: ['./geolocation.page.scss'],
})
export class GeolocationPage implements OnInit {

  lat;
  lng;
  startPosition: any;

  constructor(
    private geolocation: Geolocation,
    private ruta: ActivatedRoute,
    public toast: ToastController,
    public route: Router,
    public actionSheepController: ActionSheetController,
  ) {}

  ngOnInit(){
    this.onUbication();
  }

  onUbication(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;

      this.cargaMapa();
    }).catch((error) => {
      console.log('Error');
    });
  }

  cargaMapa(){
    mapboxgl.accessToken = 'pk.eyJ1IjoiY3Jpc3Rpbm8tZXNwaW5vbGExNCIsImEiOiJja3Z1YWltdGkwNTUwMnZxbW9pbTg3bmtoIn0.Se6QziIBBZcbW2NVwYKenw';
      
      console.log('lat', this.lat);
      console.log('lng', this.lng);

      var map = new mapboxgl.Map({

        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [this.lng, this.lat],
        zoom: 10,
      });

      map.addControl(
        new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        placeholder: 'Buscar'
        })
      )

      /*var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        unit: 'netric',
        profile: 'mapbox/driving-traffic',
        congestion: true,
        controls: {
          inputs: true,
          instructions:false,
          profileSwitcher: false,
        },
        placeholderOrign:'Tu ubicación',
        placeholderDestination:'Tu destino'
      });*/

      /*map.addControl.on('destination', function(feature){
        console.log(feature);
        alert('Seleccione un destino');
      });*/

      /*this.geolocation.getCurrentPosition().then((res) => {
        this.startPosition = res.coords;
        map.setCenter([this.startPosition.longitude, this.startPosition.latitude]);
        directions.setOrigin([this.startPosition.longitude, this.startPosition.latitude]);

        const marker = new mapboxgl.Marker()
        .setLngLat([this.startPosition.longitude, this.startPosition.latitude])
        .addTo(map);
      })*/
      
      map.addControl(
        new mapboxgl.NavigationControl({
          accessToken: mapboxgl.accessToken,
          mapboxgl: mapboxgl
        })
      );
  }
}
