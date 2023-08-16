import { Injectable } from '@angular/core';
import { Produto } from './produto';
import { Observable } from 'rxjs';
import {HttpClient} from'@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoServiceService {

    private baseUrl="http://localhost:3000/produto";

  constructor(private http: HttpClient) {} 

    getProduto(): Observable <Produto[]>{
        return this.http.get<Produto[]>(this.baseUrl);

  }
}
