import { Component, OnInit } from '@angular/core';
import { ServicioService } from './servicio.service';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MenuController, Platform, ToastController, AlertController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
 
  constructor(private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private router: Router,
    public servicio: ServicioService,
    public menu: MenuController,
    private ruta: ActivatedRoute,
    public toastCrl: ToastController,
    public alertController: AlertController) {
      this.initializeApp();
    }

    usuarios;
    email;
    password;

    initializeApp(){
      this.platform.ready().then(() =>{
        if(localStorage.getItem('id')){
          this.router.navigate(['/home'])
        }else{
          this.router.navigate(['/login'])
        }

        this.statusBar.styleDefault();
        this.splashScreen.hide();
      });
    }

    openFirst(){
      this.menu.enable(true, 'first');
      this.menu.open('first');
    }

    irUsuario(item){
      this.router.navigate(['registro', localStorage.getItem('id')]);
    }
    
    irVacuna(){
      this.router.navigate(['/listado-vacunas']);
    }

    irEnfermedad(){
      this.router.navigate(['/listado-enfermedades']);
    }

    irGeolocation(){
      this.router.navigate(['/geolocation']);
    }

    cerrarSesion(){
      localStorage.removeItem('id');
      this.router.navigate(['/login']);
    }

    ngOnInit(){}
}
