import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TestesComponent } from './testes/testes.component';
import { TestesRoutingModule } from './testes-routing.module';
import { CadastroService } from './testes.service';
import { ComponenteNgContentComponent } from './componente-ng-content/componente-ng-content.component';
import { OnChangesComponent } from './life-cycle-hooks/on-changes.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';
import { HighLightDirective } from './diretivas/high-light.directive';
import { UpperLowerCasePipe } from './pipes/upper-lower-case.pipe';
import { ObservablesComponent } from './observables/observables.component';

@NgModule({
  declarations: [
    TestesComponent,
    ComponenteNgContentComponent,
    OnChangesComponent,
    LifeCycleHooksComponent,
    ObservablesComponent,
    HighLightDirective,
    UpperLowerCasePipe,
  ],
  imports: [
    CommonModule,
    FormsModule, //Template driven forms
    ReactiveFormsModule, //ReactiveForms
    TestesRoutingModule,
  ],
  providers: [CadastroService],
})
export class CadastroModule {}
