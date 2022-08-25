import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient) { }

  //login
  login(dataUsuario){
    return this.http.post(environment.url + 'usuarioIngresar', dataUsuario)
  }

  //metodos para usuario
  getListaUsuario(){
    return this.http.get(environment.url + 'usuarios')
  }

  addUsuario(dataUsuario){
    return this.http.post(environment.url + 'usuarios', dataUsuario)
  }

  deleteUsuario(id){
    return this.http.delete(environment.url + 'usuario/' + id);
  }

  updateUsuario(dataUsuario, id){
    return this.http.put(environment.url + 'usuario/' + id, dataUsuario)
  }

  getUsuarioByID(id){
    return this.http.get(environment.url + 'usuario/' + id);
  }

  //metodos para vacunas
  getListaVacuna(){
    return this.http.get(environment.url + 'vacunas')
  }

  addVacuna(dataVacuna){
    return this.http.post(environment.url + 'vacuna', dataVacuna)
  }

  deleteVacuna(id){
    return this.http.delete(environment.url + 'vacuna/' + id);
  }

  updateVacuna(dataVacuna, id){
    return this.http.put(environment.url + 'vacuna/' + id, dataVacuna)
  }

  getVacunaByID(id){
    return this.http.get(environment.url + 'vacuna/' + id);
  }

  getVacunaByUsuario(fk_usuario){
    return this.http.get(environment.url + 'vacunaUS/' + fk_usuario);
  }

  //metodos para enfermedades
  getListaEnfermedad(){
    return this.http.get(environment.url + 'enfermedades')
  }

  addEnfermedad(dataEnfermedad){
    return this.http.post(environment.url + 'enfermedad', dataEnfermedad)
  }

  deleteEnfermedad(id){
    return this.http.delete(environment.url + 'enfermedad/' + id);
  }

  updateEnfermedad(dataEnfermedad, id){
    return this.http.put(environment.url + 'enfermedad/' + id, dataEnfermedad)
  }

  getEnfermedadByID(id){
    return this.http.get(environment.url + 'enfermedad/' + id);
  }




  
}
