import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashScreenComponent } from './component/splash-screen/splash-screen.component';
import { UsuarioLoginComponent } from './component/usuario-login/usuario-login.component';
import { UsuarioCadastroComponent } from './component/usuario-cadastro/usuario-cadastro.component';
import { UsuarioParabensComponent } from './component/usuario-parabens/usuario-parabens.component'; // Importe o componente
import { TelaPrincipalComponent } from './component/tela-principal/tela-principal.component'; // Ajuste o caminho conforme necessário
import { AdicionarTarefaComponent } from './component/adicionar-tarefa/adicionar-tarefa.component';
import { UsuarioPerfilComponent } from './usuario-perfil/usuario-perfil.component';

const routes: Routes = [
  { path: '', component: SplashScreenComponent }, // Splash screen inicial
  { path: 'usuario-login', component: UsuarioLoginComponent },
  { path: 'usuario-cadastro', component: UsuarioCadastroComponent },
  { path: 'usuario-parabens', component: UsuarioParabensComponent }, // Adicione o caminho para o novo componente
  { path: '', redirectTo: '/usuario-login', pathMatch: 'full' }, // Redireciona para a página de login por padrão
  { path: 'tela-principal', component: TelaPrincipalComponent },
  { path: '', component: SplashScreenComponent }, // Splash screen inicial
  { path: '', component: UsuarioLoginComponent },
  { path: 'tela-principal', component: TelaPrincipalComponent },  // Rota para a tela principal
  { path: '', component: UsuarioLoginComponent },
  { path: 'tela-principal', component: TelaPrincipalComponent },
  { path: 'usuario-cadastro', component: UsuarioCadastroComponent },  // Rota para a tela de cadastro
  { path: 'adicionar-tarefa', component: AdicionarTarefaComponent },
  { path: '', redirectTo: '/tela-principal', pathMatch: 'full' },
  { path: 'usuario-perfil', component: UsuarioPerfilComponent }, // Define a rota para o perfil do usuário
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
