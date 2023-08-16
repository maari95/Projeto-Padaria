import { Component } from '@angular/core';
import { Laticinios } from 'src/app/model/laticinios';
import { LaticiosServiceService } from 'src/app/service/laticios-service.service';


@Component({


  selector: 'app-laticinios',
  templateUrl: './laticinios.component.html',
  styleUrls: ['./laticinios.component.css']

})



export class LaticiniosComponent {


  laticinios: Laticinios[]=[];

  constructor(private service: LaticiosServiceService){}

  
  ngOnInit():void{
    this.listarLaticinios();

  }


  listarLaticinios():void{

    this.service.getLaticinios().subscribe(
      laticinios=>{
        this.laticinios=laticinios;
      },

      error=>{
        console.log(error);
      }
    )
  }

  deletar(id: any){
    this.service.excluirL(id).subscribe(
      ()=>{
      console.log('Produto Removido');
      
    },
      (error)=>{
        console.log("Erro ao remover", error);
      }
      
    );
} 


}
