import 'rxjs/add/operator/map';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FotoModule } from './foto/foto.module';
import { HttpModule } from '@angular/http';
import { PainelModule } from './painel/painel.module';
import { CadastroComponent }   from './cadastro/cadastro.component'; // importou
import { ListagemComponent }   from './listagem/listagem.component'; // importou

// Importa o módulo. Não esqueça de adicioná-lo no array de imports!
import { FormsModule } from '@angular/forms';
import { routing } from './app.routes';

@NgModule({
  imports:      [ BrowserModule, FotoModule, HttpModule, PainelModule, routing, FormsModule ],
  declarations: [ AppComponent, CadastroComponent, ListagemComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
