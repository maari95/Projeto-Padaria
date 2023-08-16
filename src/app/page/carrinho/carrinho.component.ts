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

  
}
