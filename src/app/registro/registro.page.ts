import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ServicioService } from '../servicio.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  codigo;
  nombre;
  correo;
  password;
  passwordRep;

  constructor(public servicio: ServicioService, public router: Router, public toastCrl: ToastController,
    private ruta: ActivatedRoute) { }

  ngOnInit() {
    this.ruta.params.subscribe((params: Params) => {
      if(params.id == 0){
        //registro
      }else{
        this.servicio.getUsuarioByID(params.id).subscribe( res => {
          this.codigo = res['usuario'].id_usurio;
          this.nombre = res['usuario'].nombre;
          this.password = res['usuario'].password;
          this.passwordRep = res['usuario'].password;
        });
      }
    });
  }

  onGuardar(){
    const dataUsuario = {
      id_usuario: this.codigo,
      nombre: this.nombre,
      correo: this.correo,
      password: this.password,
    }
    if(this.nombre == null || this.correo == null || this.password == null || this.passwordRep == null){
      this.presentToast('Debe rellenar todos los campos');
    }else{
      if(this.password == this.passwordRep){
        if(this.codigo){
          this.servicio.updateUsuario(dataUsuario, this.codigo).subscribe( res => {
            console.log(res);
            this.presentToast('Datos actualizados')
            this.router.navigate(['/home'])
          });
        }else{
          this.servicio.addUsuario(dataUsuario).subscribe( res => {
            console.log(res);
            this.presentToast('Datos guardados')
            this.router.navigate(['/login'])
          })
        }
      }else{
        this.presentToast('Las contraseñas no coinciden')
      }
    }
  }

  async presentToast(mensaje: string){
    const toast = await this.toastCrl.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }


}
