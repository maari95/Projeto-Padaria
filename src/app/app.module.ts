import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutoComponent } from './page/produto/produto.component';
import { NovoProdutoComponent } from './page/novo-produto/novo-produto.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AtualizarProdutoComponent } from './page/atualizar-produto/atualizar-produto.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';

/* *********************************************** */
/* Importando a configuração de algumas linguagens */

import { CommonModule } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt';
import { LaticiniosComponent } from './page/laticinios/laticinios.component';
import { NovoLaticinioComponent } from './page/novo-laticinio/novo-laticinio.component';
import { AtualizarLaticinioComponent } from './page/atualizar-laticinio/atualizar-laticinio.component';
import { LocalstorageComponent } from './page/localstorage/localstorage.component';

registerLocaleData(localePT);



@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    NovoProdutoComponent,
    AtualizarProdutoComponent,
    NavbarComponent,
    FooterComponent,
    LaticiniosComponent,
    NovoLaticinioComponent,
    AtualizarLaticinioComponent,
    LocalstorageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
