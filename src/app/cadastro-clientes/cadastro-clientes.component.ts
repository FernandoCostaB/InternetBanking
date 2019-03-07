import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {

  formCadastro: any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formCadastro = this.formBuilder.group({
      nome:[''],
      cpf:[],
      email:[],
      telefone:[],
      endereco:[]
    });
  }

  

}
