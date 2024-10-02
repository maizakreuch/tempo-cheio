import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashScreenComponent } from './component/splash-screen/splash-screen.component';
import { UsuarioLoginComponent } from './component/usuario-login/usuario-login.component';
import { UsuarioCadastroComponent } from './component/usuario-cadastro/usuario-cadastro.component';
import { UsuarioParabensComponent } from './component/usuario-parabens/usuario-parabens.component';
import { TelaPrincipalComponent } from './component/tela-principal/tela-principal.component';
import { UsuarioPerfilComponent } from './component/usuario-perfil/usuario-perfil.component';
import { UsuarioFavComponent } from './component/usuario-fav/usuario-fav.component';
import { UsuarioHistoricoComponent } from './component/usuario-historico/usuario-historico.component';
import { EditarTarefaComponent } from './component/editar-tarefa/editar-tarefa.component';
import { CronometroTarefaComponent } from './component/cronometro-tarefa/cronometro-tarefa.component';
import { AvaliarTarefaComponent } from './component/avaliar-tarefa/avaliar-tarefa.component';

const routes: Routes = [
  { path: '', redirectTo: 'splash-screen', pathMatch: 'full' }, // Inicia na splash screen
  { path: 'splash-screen', component: SplashScreenComponent },  // Splash screen
  { path: 'usuario-login', component: UsuarioLoginComponent },  // Tela de login
  { path: 'usuario-cadastro', component: UsuarioCadastroComponent },  // Cadastro de usuário
  { path: 'usuario-parabens', component: UsuarioParabensComponent },  // Tela de parabéns
  { path: 'usuario-perfil', component: UsuarioPerfilComponent },  // Perfil do usuário
  { path: 'usuario-fav', component: UsuarioFavComponent },  // Favoritos do usuário
  { path: 'usuario-historico', component: UsuarioHistoricoComponent },  // Histórico de tarefas
  { path: 'editar-tarefa/edit/:id', component: EditarTarefaComponent },  // Edição de tarefa com ID
  { path: 'editar-tarefa/:tipo', component: EditarTarefaComponent },  // Edição de tarefa por tipo
  { path: 'cronometro-tarefa/:id', component: CronometroTarefaComponent },  // Cronômetro com ID
  { path: 'avaliar-tarefa/:id', component: AvaliarTarefaComponent },  // Avaliação de tarefa por ID
  { path: 'tela-principal', component: TelaPrincipalComponent },  // Tela principal
  { path: '**', redirectTo: 'tela-principal' }  // Rotas não existentes redirecionam para a tela principal
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
