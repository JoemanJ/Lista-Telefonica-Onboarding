export interface Contato {
  id: number;
  nome: string;
  telefone: string;
}

export interface ContatoPostDTO {
  nome: string;
  telefone: string;
}

export interface ContatoPutDTO {
  id: number;
  nome: string;
  telefone: string;
}
