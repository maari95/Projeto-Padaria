import { Injectable } from '@angular/core';
import { Carrinho } from './carrinho';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  private carrinho : Carrinho []=[];

  constructor() { 

// Pegar item    
  const carrinhoString = localStorage.getItem('carrinho');
      if (carrinhoString){
        this.carrinho=JSON.parse(carrinhoString);
      }

}

// Método para adicionar o item

  addItem(item: Carrinho): void{
    this.carrinho.push(item);
  }

// Atualizar Produto no LocalStorage

  atualizarLocalStorage():void{
    localStorage.setItem('Carrinho', JSON.stringify(this.carrinho));
  }

  // Remover Item do Carrinho

  removerItem(item: Carrinho):void{

      const index = this.carrinho.findIndex(i => i.id === item.id);
      if(index !==-1){
        this.carrinho.splice(index,1);
        this.atualizarLocalStorage();
      }
  }

// Método para limpar carrinho
  
  limparCarrinho():void{

    this.carrinho=[];
    this.atualizarLocalStorage();

  }

// Método pegar carrinho 

  getCarrinho(): Carrinho[]{
    return this.carrinho;
  }

// Pegar total carrinho  

  getTotal(): number{
    return this.carrinho.reduce((total,item)=> total + (item.preco * item.quantidade), 0)
  }

// atualizar Quantidade no carrinho 

  atualizarQuantidade(item):void{
    const index = this.carrinho.findIndex(i => i.id === item.id);
    if (index !== -1){
      this.carrinho.[index].quantidade = item.quantidade;
      this.atualizarLocalStorage();



    }
  }
}