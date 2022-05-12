import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { PessoaService } from './pessoa.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  marcar: string;

  nomeControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);

  idadeControl = new FormControl(null, [
    Validators.required,
    Validators.min(0),
    Validators.max(150),
  ]);

  nome: string = 'valor inicial';
  idade: number;

  buttonLoading: boolean;

  pessoas: any[] = [];

  constructor(public pessoaService: PessoaService) {}

  ngOnInit(): void {
    this.carregarPessoas();
  }

  getErrorMessage(control) {
    if (control.errors) {
      switch (Object.keys(control.errors)[0]) {
        case 'required':
          return 'Campo requerido';
        case 'minlength':
          return 'Tamanho minimo';
        default:
          'Erro não conhecido';
      }
    }
    return '';
  }

  carregarPessoas() {
    this.pessoaService.obterTodasPessoas().subscribe((result: any[]) => {
      this.pessoas = result;
      this.buttonLoading = false;
    });
  }

  adicionar() {
    this.buttonLoading = true;
    this.pessoaService
      .salvarPessoa({ nome: this.nome, idade: this.idade })
      .subscribe((result) => {
        this.carregarPessoas();
      });

    this.nome = null;
    this.idade = null;
  }

  remover(id: string) {
    this.pessoaService.removerPessoa(id).subscribe({
      next: (body) => {
        this.carregarPessoas();
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
