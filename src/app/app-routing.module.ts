import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoComponent } from './page/produto/produto.component';
import { NovoProdutoComponent } from './page/novo-produto/novo-produto.component';
import { AtualizarProdutoComponent } from './page/atualizar-produto/atualizar-produto.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { LaticiniosComponent } from './page/laticinios/laticinios.component';
import { NovoLaticinioComponent } from './page/novo-laticinio/novo-laticinio.component';
import { AtualizarLaticinioComponent } from './page/atualizar-laticinio/atualizar-laticinio.component';
import { LocalstorageComponent } from './page/localstorage/localstorage.component';
import { CarrinhoComponent } from './page/carrinho/carrinho.component';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'produto', component:ProdutoComponent},
  {path:'novo', component:NovoProdutoComponent},
  {path: 'atualizar/:id', component:AtualizarProdutoComponent},
  {path: 'navbar', component:NavbarComponent},
  {path: 'footer',component:FooterComponent},
  {path: 'laticinios', component:LaticiniosComponent},
  {path: 'novoLaticinio', component:NovoLaticinioComponent},
  {path: 'atualizarL/:id', component:AtualizarLaticinioComponent},
  {path: 'localstorage', component:LocalstorageComponent},
  {path: 'carrinho', component:CarrinhoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
