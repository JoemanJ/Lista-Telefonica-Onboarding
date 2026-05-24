import { Component, inject, input, output } from '@angular/core';
import { ContatoService } from '../../services/contato';
import { Contato } from '../../models/contato.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-contato',
  imports: [FormsModule],
  templateUrl: './card-contato.html',
  styleUrl: './card-contato.scss',
})
export class CardContato {
  contato = input.required<Contato>();

  nomeEdit: string = '';
  telefoneEdit: string = '';

  contatoService = inject(ContatoService);

  excluido = output<Contato>();

  editando: boolean = false;
  excluindo: boolean = false;

  alternarEdicao(): void {
    this.editando = !this.editando;
    this.nomeEdit = this.contato().nome;
    this.telefoneEdit = this.contato().telefone;
  }

  confirmarEdicao(): void {
    this.contatoService
      .putContato({
        id: this.contato().id,
        nome: this.nomeEdit,
        telefone: this.telefoneEdit,
      })
      .subscribe({
        next: (res) => {
          this.contato().nome = this.nomeEdit;
          this.contato().telefone = this.telefoneEdit;
        },
        error: (err) => alert(`Erro ao atualizar o contato. Por favor tente novamente mais tarde\n
          ${err.message}`),
          complete: () => this.alternarEdicao()
        });
  }

  alternarExclusao(): void {
    this.excluindo = !this.excluindo;
  }

  confirmarExclusao(): void {
    this.contatoService.deleteContato(this.contato().id).subscribe({
      next: (res) => {
        this.excluido.emit(this.contato());
        this.excluindo = false;
      },
      error: (err) => alert(
        `Erro ao excluir o contato. Por favor tente novamente mais tarde\n
        ${err.message}`),
    });
  }

  // Se telefone for "+55 (12) 93456 7890", retorna "5512934567890"
  getTelefoneSomenteNumero(): string {
    const numeros = this.contato().telefone.match(/\d+/g)?.join('');
    return numeros ?? 'Desconhecido';
  }
}
