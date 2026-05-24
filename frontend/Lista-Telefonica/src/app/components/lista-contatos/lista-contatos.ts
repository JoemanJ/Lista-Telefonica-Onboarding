import { Component, inject, input, OnInit, output } from '@angular/core';
import { ContatoService } from '../../services/contato';
import { Contato } from '../../models/contato.model';
import { CardContato } from '../card-contato/card-contato';

@Component({
  selector: 'app-lista-contatos',
  imports: [CardContato],
  templateUrl: './lista-contatos.html',
  styleUrl: './lista-contatos.scss',
})
export class ListaContatos {
  contatos = input.required<Contato[]>();
  contatoExcluido = output<Contato>();
}
