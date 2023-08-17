import { Component } from '@angular/core';
import { Laticinios } from 'src/app/model/laticinios';
import { LaticiosServiceService } from 'src/app/model/laticios-service.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-novo-laticinio',
  templateUrl: './novo-laticinio.component.html',
  styleUrls: ['./novo-laticinio.component.css']
})
export class NovoLaticinioComponent {

  dadosL: Laticinios={
    id:'',
    nome:'',
    peso:'',
    validade:''
  }

  constructor(private service: LaticiosServiceService,
    private router: Router){}
    
    adicionarLaticinio(form: NgForm){
      const laticinio = form.value;

      this.service.adicionarLaticinio(laticinio).subscribe(
        (response: any) =>{
          console.log('Laticinio Cadastrado!!!', response);
          alert('Novo laticinio registrado');



          this.router.navigate(['/laticinios']);
        }
      )

    }



}
