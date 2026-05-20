import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card-contato',
  imports: [],
  templateUrl: './card-contato.html',
  styleUrl: './card-contato.scss',
})
export class CardContato {
  nome = input.required<string>();
  telefone = input.required<string>();

  // Se telefone for "+55 (12) 93456 7890", retorna "5512934567890"
  getTelefoneSomenteNumero(): string{
    const numeros = this.telefone().match(/\d+/g)?.join('');
    return numeros?? "Desconhecido";
  }
}
