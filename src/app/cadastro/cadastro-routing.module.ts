import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroDetalheComponent } from './cadastro-detalhe/cadastro-detalhe.component';
import { authGuard } from '../guard';

const routes: Routes = [
  {
    path: 'cadastro',
    component: CadastroDetalheComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroRoutingModule {}
