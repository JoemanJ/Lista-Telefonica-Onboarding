import { Component, inject, signal, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { FormContato } from './components/form-contato/form-contato';
import { ListaContatos } from './components/lista-contatos/lista-contatos';
import { ContatoService } from './services/contato';
import { Contato } from './models/contato.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, FormContato, ListaContatos],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected readonly title = signal('Lista-Telefonica');

  contatoService = inject(ContatoService);

  contatos = signal<Contato[]>([]);

  ngOnInit() {
    this.atualizaContatos();
  }

  atualizaContatos() {
    this.contatoService.getTodosContatos().subscribe({
      next: (contatos) => this.contatos.set(contatos),
      error: (err) =>
        alert(`Erro ao atualizar a lista de contatos. Por favor tente novamente mais tarde\n
          ${err.message}`),
    });
  }
}
