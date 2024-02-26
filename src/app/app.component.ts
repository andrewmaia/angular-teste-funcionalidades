import { Component } from '@angular/core';
import { CadastroService } from './cadastro/testes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-teste-funcionalidades';
  constructor(private service: CadastroService) {}

  autenticar() {
    localStorage.setItem('usuario', 'usuario');
  }

  logoff() {
    localStorage.removeItem('usuario');
  }

  validarServiceSingleton() {
    this.service.validarServiceSingleton();
  }
}
