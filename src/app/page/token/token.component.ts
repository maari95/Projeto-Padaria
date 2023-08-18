import { Component } from '@angular/core';
import { Token } from 'src/app/model/token';
import { TokenService } from 'src/app/model/token.service';


@Component({

  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})

export class TokenComponent {
  usuario : string = '';
  token : Token | null = null;


  constructor (private service: TokenService){}

  gerarToken(){
    this.token = this.service.gerarToken(this.usuario);
  }
}
