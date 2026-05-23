import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contato } from '../models/contato.model';

@Injectable({
  providedIn: 'root',
})
export class ContatoService {
  private readonly httpClient = inject(HttpClient);
  // TODO: mudar para o endereço certo da API
  private readonly API_URL = '127.0.0.1:12345/contato';

  getTodosContatos(): Observable<Contato[]> {
    return this.httpClient.get<Contato[]>(this.API_URL);
  }

  getContatosDeExemplo(): Contato[] {
    return [
      {
        nome: 'Fulano D. Tal',
        telefone: '+55 12 93456 7890',
      },
      {
        nome: 'Ciclano D. Tal',
        telefone: '+55 09 98765 4321',
      },
      {
        nome: 'Dona Maria',
        telefone: '5599999999999',
      },
      {
        nome: 'John Doe',
        telefone: '25 91234 4321',
      },
      {
        nome: 'Fredoscovaldo Geringôncio Pereira Silva Júnior Bezerra da Silva',
        telefone: '12934567890',
      },
      {
        nome: 'Última Bolacha do Pacote',
        telefone: '99 9 9999 9999',
      },
    ];
  }

  postContato(contato: Contato) {
    //TODO: Mudar isso pra postar o contato na API
    console.log(`Contato salvo: ${contato.nome}, ${contato.telefone}`);
  }

  putContato(contato: Contato) {
    //TODO: Mudar isso pra editar o contato na API
    console.log(`Contato editado: ${contato.nome}, ${contato.telefone}`);
  }

  deleteContato(contatoId: number){
    //TODO: Mudar isso pra deletar o contato na API
    console.log(`Contato com id ${contatoId} deletado`);
  }
}
