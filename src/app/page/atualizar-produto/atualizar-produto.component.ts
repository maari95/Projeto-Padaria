import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProdutoServiceService } from 'src/app/service/produto-service.service';
import { Produto } from 'src/app/model/produto';

@Component({
  selector: 'app-atualizar-produto',
  templateUrl: './atualizar-produto.component.html',
  styleUrls: ['./atualizar-produto.component.css']
})
export class AtualizarProdutoComponent {

  produtoForm! : FormGroup;

  dados:Produto={
    id:'',
    nome:'',
    peso:''
  }
   

  constructor(private route: ActivatedRoute, private service: ProdutoServiceService,
    private formBuilder: FormBuilder, private router: Router){}
  
  ngOnInit(): void{
    this.inicializaForm();

    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.service.getProdutos(id).subscribe(
        (response:Produto)=>{
          this.dados=response;
        }
      )
    }
    
  }

  inicializaForm(){
    this.produtoForm=this.formBuilder.group({
      nome:['',Validators.required],
      peso:['',Validators.required]
    })

  }

  atualizarDados(){
    this.service.update(this.dados, this.dados.id).subscribe(
      (response : any)=>{
        console.log('Dados atualizados com sucesso', response);
        alert('Produto Atualizado com Sucesso')
        this.router.navigate(['/']);
      },
      (error : any)=>{
        console.log('Erro ao atualizar', error);
      }
    )
  }

}

 
