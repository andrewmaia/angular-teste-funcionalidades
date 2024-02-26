import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestesComponent } from './testes/testes.component';
import { authGuard } from '../guard';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';
import { ObservablesComponent } from './observables/observables.component';
import { StandaloneComponent } from './standalone/standalone.component';

const routes: Routes = [
  {
    path: 'Testes',
    component: TestesComponent,
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
  {
    path: 'Standalone',
    component: StandaloneComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestesRoutingModule {}
