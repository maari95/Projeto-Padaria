import { Injectable } from '@angular/core';
import { Carrinho } from './carrinho';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  private carrinho : Carrinho []=[];

  constructor() { 

  const carrinhoString = localStorage.getItem('carrinho');
      if (carrinhoString){
        this.carrinho=JSON.parse(carrinhoString);
      }

}

  addItem(item: Carrinho): void{
    this.carrinho.push(item);
  }

  atualizarLocalStorage():void{
    localStorage.setItem('Carrinho', JSON.stringify(this.carrinho));
  }

  removerItem(item: Carrinho):void{

      const index = this.carrinho.findIndex(i => i.id === item.id);
      if(index !==-1){
        this.carrinho.splice(index,1);
        this.atualizarLocalStorage();
      }
  }

  limparCarrinho():void{

    this.carrinho=[];
    this.atualizarLocalStorage();

  }
  getCarrinho(): Carrinho[]{
    return this.carrinho;
  }

  getTotal(): number
  
}