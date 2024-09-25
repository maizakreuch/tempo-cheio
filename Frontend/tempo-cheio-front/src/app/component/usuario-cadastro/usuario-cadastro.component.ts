import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';  // Importe o Router para a navegação
import { UsuarioService } from '../../servicos/usuario.service';
import { Usuario } from '../../interfaces/Usuario';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.scss']
})
export class UsuarioCadastroComponent implements OnInit {
  cadastroForm!: FormGroup;
  usuario: Usuario = {
    id: 0,
    nome: '',
    senha: 0,
    email: '',
    status: false
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private usuarioService: UsuarioService) { }  // Adicione Router ao construtor

  ngOnInit(): void {
    // Defina o formulário com os campos de cadastro
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirmarSenha: ['', Validators.required]
    }, {
      validators: this.matchingPasswords('senha', 'confirmarSenha')  // Validação personalizada para senhas correspondentes
    });
  }

  // Função personalizada para verificar se as senhas coincidem
  matchingPasswords(senha: string, confirmarSenha: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[senha];
      const confirmPasswordControl = formGroup.controls[confirmarSenha];

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ mismatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    };
  }

  onSubmit() {
    if (this.cadastroForm.valid) {
      // Se o formulário estiver válido, navegue para a próxima tela (por exemplo, uma tela de parabéns)
      this.usuarioService.add(this.usuario).subscribe(() => {
        this.router.navigate(['/usuario-parabens']);

      });
    } else {
      // Caso contrário, exibe uma mensagem de erro ou feedback
      console.log('Preencha todos os campos corretamente.');
    }
  }
}
