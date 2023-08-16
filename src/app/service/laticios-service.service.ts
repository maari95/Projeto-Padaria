import { Injectable } from '@angular/core';
import { Laticinios } from '../model/laticinios';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LaticiosServiceService {

private baseUrl='http://localhost:3000/laticinios';


  constructor(private http:HttpClient) { }


  getLaticinios():Observable<Laticinios[]>{
    return this.http.get<Laticinios[]>(this.baseUrl);
  }


  adicionarLaticinio(laticinios : Laticinios): Observable<Laticinios>{
    return this.http.post<Laticinios>(this.baseUrl, laticinios);
  }


  getLaticinio(id: string){
  return this.http.get<Laticinios> (this.baseUrl +'/' +id)
  }

  update(laticinios: Laticinios, id:any): Observable<any>{
  return this.http.put(this.baseUrl+ '/' + id, laticinios);
  } 


  excluirL(id: number) : Observable<any>{
  return this.http.delete(this.baseUrl +['/'] + id); 
  }


}
