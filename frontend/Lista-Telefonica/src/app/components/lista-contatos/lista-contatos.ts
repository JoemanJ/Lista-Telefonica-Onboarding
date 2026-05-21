import { Component, inject, OnInit } from '@angular/core';
import { ContatoService } from '../../services/contato';
import { Contato } from '../../models/contato.model';
import { CardContato } from '../card-contato/card-contato';

@Component({
  selector: 'app-lista-contatos',
  imports: [CardContato],
  templateUrl: './lista-contatos.html',
  styleUrl: './lista-contatos.scss',
})
export class ListaContatos implements OnInit {
  contatoService = inject(ContatoService);

  contatos: Contato[] = [];

  ngOnInit(){
    // TODO: mudar isso para pegar os contatos da API
    this.contatos = this.contatoService.getContatosDeExemplo();
  }
}