import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroDetalheComponent } from './cadastro-detalhe/cadastro-detalhe.component';
import { authGuard } from '../guard';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';

const routes: Routes = [
  {
    path: 'Testes',
    component: CadastroDetalheComponent,
    canActivate: [authGuard],
  },
  {
    path: 'Hooks',
    component: LifeCycleHooksComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroRoutingModule {}
