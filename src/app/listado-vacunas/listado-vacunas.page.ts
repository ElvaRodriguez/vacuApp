import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MenuController, ToastController, AlertController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-listado-vacunas',
  templateUrl: './listado-vacunas.page.html',
  styleUrls: ['./listado-vacunas.page.scss'],
})
export class ListadoVacunasPage implements OnInit {

  vacunas;
  textoBuscar = '';

  constructor( public servicio: ServicioService, public router: Router, private ruta: ActivatedRoute,
    public toastCrl: ToastController, public alertController: AlertController, public menu: MenuController) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.onListadoByUsuario();
    this.menu.enable(true);
  }

  buscar(event){
    this.textoBuscar = event.detail.value;
  }

  onListadoByUsuario(){
    this.ruta.params.subscribe((params: Params) => {
      this.servicio.getVacunaByUsuario(localStorage.getItem('id')).subscribe(res => {
        this.vacunas = res['vacunalista'];
        console.log(this.vacunas);
      });
    });
  }

  onNuevo(){
    this.router.navigate(['/vacuna', 0]);
  }

  eliminar(item){
    this.servicio.deleteVacuna(item.id_vacuna).subscribe( res => { 
      this.presentToast('Vacuna Eliminada');
      this.onListadoByUsuario();
    })
  }

  editar(item){
    this.router.navigate(['vacuna', item.id_vacuna])
  }

  async presentToast(mensaje: string){
    const toast = await this.toastCrl.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }


}
