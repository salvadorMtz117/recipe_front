import { Component } from '@angular/core';
import { UtilsService } from 'src/app/pages/services/utils.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  sendNewsletter:boolean = false;
  emailNewsletter:string = '';

  constructor(
    private _service: UtilsService,
    private toastr: ToastrService
  ) { }

  subscribeNewsletter(){
    //this.sendNewsletter = true;
    if(this.emailNewsletter == ''){
      this.toastr.error('Por favor ingrese su correo electrónico','Datos incompletos');
      //this.sendNewsletter = false;
      return;
    }
    this._service.subscribeNewsLetter(this.emailNewsletter).subscribe((response) => {
      //this.sendNewsletter = false;
      if(response && response.code == 200){
        this.toastr.success('Gracias por registrarte en nuestro newsletter, pronto recibiras recetas y noticias de interes', 'Registro completado');
      } else {
        this.toastr.error('Ocurrión un error al intentar registrarte en nuestro newsletter, por favor intenta más tarde','Error en el registro');
      }
      this.emailNewsletter = '';
    });
  }

}
