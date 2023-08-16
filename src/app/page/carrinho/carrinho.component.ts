import { Component } from '@angular/core';
import { Carrinho } from 'src/app/model/carrinho';
import { CarrinhoService } from 'src/app/model/carrinho.service';


@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})

export class CarrinhoComponent {

  carrinho : Carrinho[]=[];

    constructor(private service : CarrinhoService){
    this.carrinho = this.service.getCarrinho();
  }

// Adicionar items

  adicionarItem():void{


    const novoItem : Carrinho = {

      id : this.carrinho.length +1,
      nome : 'Produto' + (this.carrinho.length +1),
      preco : Math.random() * 100,
      quantidade : 1

    };

    this.service.addItem(novoItem);
    this.carrinho=this.service.getCarrinho();
  }

// Remover item
  removerItem(item: Carrinho):void{

    this.service.removerItem(item);
    this.carrinho = this.service.getCarrinho();
  }

// Aumentar Quantidade  
  aumentarQuantidade(item: Carrinho):void{
    
    item.quantidade++;
    this.service.atualizarQuantidade(item);
    this.carrinho = this.service.getCarrinho();
}

// Limpar carrinho
  limparCarrinho():void {

    this.service.limparCarrinho();
    this.carrinho = [];
  
}

// Calcular valor
  calcularValor():number{
    
    return this.service.getTotal();
  }

}
