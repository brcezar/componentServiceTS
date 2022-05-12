import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PessoaService {
  apiURL: string = 'https://crudcrud.com/api/9e25d95bc43343e3b5f7768359bb23c0';

  constructor(public httpClient: HttpClient) {}

  obterTodasPessoas() {
    return this.httpClient.get(this.apiURL);
  }

  salvarPessoa(pessoa: any) {
    return this.httpClient.post(this.apiURL, pessoa);
  }

  removerPessoa(id: string) {
    return this.httpClient.delete(this.apiURL + '/' + id);
  }
}
