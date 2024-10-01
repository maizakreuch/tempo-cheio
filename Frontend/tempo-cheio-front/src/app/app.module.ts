import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa FormsModule para o ngModel
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule
import { provideHttpClient } from '@angular/common/http'; // Apenas importe provideHttpClient

import { AppComponent } from './app.component';
import { UsuarioLoginComponent } from './component/usuario-login/usuario-login.component';
import { UsuarioCadastroComponent } from './component/usuario-cadastro/usuario-cadastro.component';
import { UsuarioParabensComponent } from './component/usuario-parabens/usuario-parabens.component';
import { AppRoutingModule } from './app-routing.module';
import { TelaPrincipalComponent } from './component/tela-principal/tela-principal.component';
import { SplashScreenComponent } from './component/splash-screen/splash-screen.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { UsuarioPerfilComponent } from './component/usuario-perfil/usuario-perfil.component';
import { UsuarioFavComponent } from './component/usuario-fav/usuario-fav.component';
import { UsuarioHistoricoComponent } from './component/usuario-historico/usuario-historico.component';
import { EditarTarefaComponent } from './component/editar-tarefa/editar-tarefa.component';
import { CronometroTarefaComponent } from './component/cronometro-tarefa/cronometro-tarefa.component';
import { AvaliarTarefaComponent } from './component/avaliar-tarefa/avaliar-tarefa.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioLoginComponent,
    UsuarioCadastroComponent,
    UsuarioParabensComponent,
    TelaPrincipalComponent,
    SplashScreenComponent,
    FooterComponent,
    HeaderComponent,
    UsuarioPerfilComponent,
    UsuarioFavComponent,
    UsuarioHistoricoComponent,
    EditarTarefaComponent,
    CronometroTarefaComponent,
    AvaliarTarefaComponent // Declare o componente
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Certifique-se de incluir FormsModule
    ReactiveFormsModule,
  ],
  providers: [
    provideHttpClient() // Configura o HttpClient usando a nova abordagem
  ],
  bootstrap: [AppComponent] // Componente raiz
})
export class AppModule { }
