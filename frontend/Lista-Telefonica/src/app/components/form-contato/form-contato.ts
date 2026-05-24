import { Component, inject, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContatoService } from '../../services/contato';
import { ContatoPostDTO } from '../../models/contato.model';

@Component({
  selector: 'app-form-contato',
  imports: [ReactiveFormsModule],
  templateUrl: './form-contato.html',
  styleUrl: './form-contato.scss',
})
export class FormContato {
  contatoService = inject(ContatoService);
  contatoAdicionado = output();

  readonly regexTelefone = /^\(?([1-9]{2})\)? ?(?:9\d|[0-8])\d{3}-?\d{4}$/;
  errorMessage: string = '';

  formulario = new FormGroup({
    nome: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    telefone: new FormControl('', {
      nonNullable: true,
      validators: [Validators.pattern(this.regexTelefone), Validators.required],
    }),
  });

  salvarContato() {
    const dadosForm = this.formulario.getRawValue();
    const novoContato: ContatoPostDTO = {
      nome: dadosForm.nome,
      telefone: dadosForm.telefone,
    };

    this.contatoService.postContato(novoContato).subscribe({
      next: (res) => this.contatoAdicionado.emit(),
      error: (err) => alert(err),
    });
  }
}
