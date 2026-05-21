import { Component, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { FormContato } from './components/form-contato/form-contato';
import { ListaContatos } from './components/lista-contatos/lista-contatos';
import { CardContato } from './components/card-contato/card-contato';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, FormContato, ListaContatos, CardContato],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Lista-Telefonica');
}
