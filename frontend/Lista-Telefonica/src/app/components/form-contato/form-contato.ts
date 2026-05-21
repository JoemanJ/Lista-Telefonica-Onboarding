import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContatoService } from '../../services/contato';

@Component({
  selector: 'app-form-contato',
  imports: [ReactiveFormsModule],
  templateUrl: './form-contato.html',
  styleUrl: './form-contato.scss',
})
export class FormContato {
  contatoService = inject(ContatoService);

  readonly regexTelefone = /^\(?([1-9]{2})\)? ?(?:9\d|[0-8])\d{3}-?\d{4}$/;

  formulario = new FormGroup({
    nome: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    telefone: new FormControl('', {
      nonNullable: true,
      validators: [Validators.pattern(this.regexTelefone), Validators.required],
    }),
  });

  salvarContato() {
    this.contatoService.postContato(this.formulario.getRawValue());
  }
}
