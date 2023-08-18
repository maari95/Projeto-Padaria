import { Component, OnInit } from '@angular/core';
import { Laticinios } from 'src/app/model/laticinios';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LaticiosServiceService } from 'src/app/model/laticios-service.service';


@Component({
  selector: 'app-atualizar-laticinio',
  templateUrl: './atualizar-laticinio.component.html',
  styleUrls: ['./atualizar-laticinio.component.css']
})

export class AtualizarLaticinioComponent {

  laticiniosForm! : FormGroup;

  dadosL: Laticinios={
    id:0,
    nome:'',
    peso:'',
    validade:''

  }

  constructor(private route: ActivatedRoute, private service: LaticiosServiceService,
    private formBuilder: FormBuilder, private router: Router){}

    ngOnInit(): void{
      this.inicializaForm();

      const id = this.route.snapshot.paramMap.get('id');
      if(id){
        this.service.getLaticinio(id).subscribe(
          (response:Laticinios)=>{
            this.dadosL=response;
          }
        )
      }
      
    }   
    inicializaForm(){
      this.laticiniosForm=this.formBuilder.group({
        nome:['',Validators.required],
        peso:['',Validators.required],
        validade:['',Validators.required]
      })
  
    }
    
    atualizarDados(){
      this.service.update(this.dadosL, this.dadosL.id).subscribe(
        (response : any)=>{
          console.log('Dados atualizados com sucesso', response);
          alert('Produto Atualizado com Sucesso')
          this.router.navigate(['/laticinios']);
        },
        (error : any)=>{
          console.log('Erro ao atualizar', error);
        }
      )
    }
  
  }
