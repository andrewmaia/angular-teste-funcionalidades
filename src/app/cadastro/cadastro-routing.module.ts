import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroDetalheComponent } from './cadastro-detalhe/cadastro-detalhe.component';
import { authGuard } from '../guard';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';
import { ObservablesComponent } from './observables/observables.component';

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
  {
    path: 'Observables',
    component: ObservablesComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroRoutingModule {}
