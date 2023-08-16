import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProdutoServiceService } from 'src/app/service/produto-service.service';
import { Produto } from 'src/app/model/produto';
import { Router } from '@angular/router';


@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.component.html',
  styleUrls: ['./novo-produto.component.css']
})
export class NovoProdutoComponent {

  dadosp: Produto={
  id:'',
  nome:'',
  peso:''
  };

  constructor(private service: ProdutoServiceService,
    private router: Router){}

     adicionarProduto(form: NgForm) {
        const produto = form.value;
    
        this.service.adicionarProduto(produto).subscribe(
          (response: any) => {
            console.log('Produto Cadastrado!!', response);
            alert('Novo produto registrado');



            this.router.navigate(['/']);
          }
        );
      }
    }     