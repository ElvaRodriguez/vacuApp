import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-enfermedad',
  templateUrl: './enfermedad.page.html',
  styleUrls: ['./enfermedad.page.scss'],
})
export class EnfermedadPage implements OnInit {

  mid;
  mEnfermedad;
  mVacuna;
  mDescripcion;

  constructor(public servicio: ServicioService, public router: Router, public toastCtrol: ToastController,
    private ruta: ActivatedRoute) { }

  ngOnInit() {
    this.ruta.params.subscribe((params: Params) => {
      if(params.id == 0){
        //registra enfermedad
      }else{
        this.servicio.getEnfermedadByID(params.id).subscribe( res => {
          this.mid = res['enfermedad'].id_enfermedad;
          this.mEnfermedad = res['enfermedad'].nombre_enfermedad;
          this.mVacuna = res['enfermedad'].vacuna;
          this.mDescripcion = res['enfermedad'].descripcion;
        });
      }
    });
  }

  onGuardar(){
    const dataEnfermedad = {
      id_enfermedad: this.mid,
      nombre_enfermedad: this.mEnfermedad,
      vacuna: this.mVacuna,
      descripcion: this.mDescripcion,
    }
    if(this.mid){
      this.servicio.updateEnfermedad(dataEnfermedad, this.mid).subscribe( res => {
        console.log(res);
        this.presentToast('Actualizado')
        this.router.navigate(['/listado-enfermedades'])
      });
    }else{
      this.servicio.addEnfermedad(dataEnfermedad).subscribe( res => {
        console.log(res);
        this.presentToast('Guardado')
        this.router.navigate(['/listado-enfermedades'])
      })
    }
  }

  async presentToast(mensaje: string){
    const toast = await this.toastCtrol.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }
}
