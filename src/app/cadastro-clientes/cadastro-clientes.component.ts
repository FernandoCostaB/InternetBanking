import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {

  formCadastro;
  conversao;
  valoresForm: Object;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formCadastro = this.formBuilder.group({
      nome: [''],
      cpf: [''],
      email: [''],
      telefone: [''],
      endereco: ['']
    });
    this.formCadastro.valueChanges.pipe(
      debounceTime(1000))
      .subscribe(res => {
        this.valoresForm = res;
      });
  }


  cadastro() {
    this.conversao = JSON.stringify(this.valoresForm);

    localStorage.setItem('cadastro', this.conversao);
  }

}
