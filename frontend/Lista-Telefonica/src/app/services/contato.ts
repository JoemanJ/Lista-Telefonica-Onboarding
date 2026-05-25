import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contato, ContatoPostDTO, ContatoPutDTO } from '../models/contato.model';

@Injectable({
  providedIn: 'root',
})
export class ContatoService {
  private readonly httpClient = inject(HttpClient);
  private readonly API_URL = 'http://localhost:5167/api/contatos';

  getTodosContatos(): Observable<Contato[]> {
    return this.httpClient.get<Contato[]>(this.API_URL);
  }

  getContato(contatoId: number) {
    return this.httpClient.get<Contato>(this.API_URL + `/${contatoId}`);
  }

  postContato(contato: ContatoPostDTO) {
    return this.httpClient.post(this.API_URL, contato);
  }

  putContato(contato: ContatoPutDTO) {
    return this.httpClient.put(this.API_URL + `/${contato.id}`, contato);
  }

  deleteContato(contatoId: number) {
    return this.httpClient.delete(this.API_URL + `/${contatoId}`);
  }
}
