import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';  // Importe o Router para a navegação

@Component({
  selector: 'app-usuario-login',
  templateUrl: './usuario-login.component.html',
  styleUrls: ['./usuario-login.component.scss']
})
export class UsuarioLoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}  // Adicione Router ao construtor

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Se o formulário estiver válido, navegue para a tela principal
      this.router.navigate(['/tela-principal']);
    } else {
      // Caso contrário, exibe uma mensagem de erro ou feedback
      console.log('Preencha os campos corretamente.');
    }
  }

  // Adicione o método onCadastro
  onCadastro() {
    // Navega para a tela de cadastro sem verificar os campos do formulário
    this.router.navigate(['/usuario-cadastro']);
  }
}
