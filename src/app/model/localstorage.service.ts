import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  private localstorage: Storage;



  constructor() {

    this.localstorage = window.localStorage;

   }

   setItem(key : string, value : string){
      this.localstorage.setItem(key, value);    
   }
   
   getItem(key : string): string | null {
      return this.localstorage.getItem(key);
    }

    removeItem(key : string){
      this.localstorage.removeItem(key);
      

    }
}
