import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-teste-funcionalidades';
  autenticar() {
    localStorage.setItem('usuario', 'usuario');
  }

  logoff() {
    debugger;
    localStorage.removeItem('usuario');
  }
}