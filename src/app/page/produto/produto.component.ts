import { Component } from '@angular/core';
import { Produto } from 'src/app/model/produto';
import { ProdutoServiceService } from 'src/app/service/produto-service.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {

  produto: Produto[]=[];

  constructor(private service: ProdutoServiceService){}

  ngOnInit():void{
    this.listarProdutos();
  }

  listarProdutos():void{
    this.service.getProduto().subscribe(
      produtos=>{
        this.produto=produtos;
      },
      error =>{
        console.log(error);
      }
)
}
  deletar(id: any){
    this.service.excluir(id).subscribe(
      ()=>{
      console.log('Produto Removido');
      
    },
      (error)=>{
        console.log("Erro ao remover", error);
      }
      
    );
}
}