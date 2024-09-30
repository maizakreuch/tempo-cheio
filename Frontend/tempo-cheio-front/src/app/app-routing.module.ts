import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashScreenComponent } from './component/splash-screen/splash-screen.component';
import { UsuarioLoginComponent } from './component/usuario-login/usuario-login.component';
import { UsuarioCadastroComponent } from './component/usuario-cadastro/usuario-cadastro.component';
import { UsuarioParabensComponent } from './component/usuario-parabens/usuario-parabens.component'; // Importe o componente
import { TelaPrincipalComponent } from './component/tela-principal/tela-principal.component'; // Ajuste o caminho conforme necessário
// import { AdicionarTarefaComponent } from './component/adicionar-tarefa/adicionar-tarefa.component';
import { UsuarioPerfilComponent } from './component/usuario-perfil/usuario-perfil.component';
import { UsuarioFavComponent } from './component/usuario-fav/usuario-fav.component';
import { UsuarioHistoricoComponent } from './component/usuario-historico/usuario-historico.component';
import { EditarTarefaComponent } from './component/editar-tarefa/editar-tarefa.component';
import { CronometroTarefaComponent } from './component/cronometro-tarefa/cronometro-tarefa.component';
import { AvaliarTarefaComponent } from './component/avaliar-tarefa/avaliar-tarefa.component'; // ajuste o caminho conforme necessário


const routes: Routes = [
  { path: 'splash-screen', component: SplashScreenComponent }, // Splash screen inicial
  { path: 'usuario-login', component: UsuarioLoginComponent },
  { path: 'usuario-parabens', component: UsuarioParabensComponent }, // Adicione o caminho para o novo componente
  { path: 'usuario-cadastro', component: UsuarioCadastroComponent },  // Rota para a tela de cadastro
  // { path: 'adicionar-tarefa/:tipo', component: AdicionarTarefaComponent },
  { path: 'usuario-perfil', component: UsuarioPerfilComponent }, // Define a rota para o perfil do usuário
  { path: 'usuario-fav', component: UsuarioFavComponent }, // Adicione a rota
  { path: 'usuario-historico', component: UsuarioHistoricoComponent},
  {path: 'editar-tarefa', component: EditarTarefaComponent},
  { path: 'editar-tarefa/:tipo', component: EditarTarefaComponent },
  { path: 'cronometro-tarefa/:id', component: CronometroTarefaComponent },
  { path: 'avaliar-tarefa/:id', component: AvaliarTarefaComponent },
  { path: 'tela-principal', component: TelaPrincipalComponent },
  { path: '', redirectTo: '/tela-principal', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
