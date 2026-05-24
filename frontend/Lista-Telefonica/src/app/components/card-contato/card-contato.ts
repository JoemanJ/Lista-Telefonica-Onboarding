import { Component, inject, input } from '@angular/core';
import { ContatoService } from '../../services/contato';
import { Contato } from '../../models/contato.model';

@Component({
  selector: 'app-card-contato',
  imports: [],
  templateUrl: './card-contato.html',
  styleUrl: './card-contato.scss',
})
export class CardContato {
  nome = input.required<string>();
  telefone = input.required<string>();

  nomeEdit = "";
  telefoneEdit = "";

  contatoService = inject(ContatoService);

  editando: boolean = false;
  excluindo: boolean = false;

  alternarEdicao(): void{
    this.editando = !this.editando;
    this.nomeEdit = this.nome();
    this.telefoneEdit = this.telefone();
  }

  confirmarEdicao(): void{
    this.contatoService.putContato(
      {
        nome: this.nome(),
        telefone: this.telefone()
      }
    )
  }

  alternarExclusao(): void{
    this.excluindo = !this.excluindo;
  }
  
  confirmarExclusao(): void{
    this.contatoService.deleteContato(1);
    //TODO: Retirar esse contato da lista
    this.excluindo = false;
  }

  // Se telefone for "+55 (12) 93456 7890", retorna "5512934567890"
  getTelefoneSomenteNumero(): string{
    const numeros = this.telefone().match(/\d+/g)?.join('');
    return numeros?? "Desconhecido";
  }
}
