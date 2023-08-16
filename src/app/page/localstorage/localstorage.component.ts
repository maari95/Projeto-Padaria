import { Component } from '@angular/core';
import { LocalstorageService } from 'src/app/model/localstorage.service';

@Component({
  selector: 'app-localstorage',
  templateUrl: './localstorage.component.html',
  styleUrls: ['./localstorage.component.css']
})


export class LocalstorageComponent {

  key : string='';
  value : string='';



  constructor(private service: LocalstorageService){}

// Setar um item  
  setItem(){
    if (this.key && this.value){
        this.service.setItem(this.key, this.value);
        this.key='';
        this.value='';

    }  
  }

// Pegar um item
  getItem(){
    if(this.key){
      const value=this.service.getItem(this.key);

    alert(value || 'Item não encontrado');
      this.key='';

    }

  }

// Remover Item
  removeItem(){
    if(this.key){
      this.service.removeItem(this.key);
      this.key='';

    }
  }



}
