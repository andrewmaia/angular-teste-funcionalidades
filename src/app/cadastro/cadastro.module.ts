import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CadastroDetalheComponent } from './cadastro-detalhe/cadastro-detalhe.component';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { CadastroService } from './cadastro.service';
import { ComponenteNgContentComponent } from './componente-ng-content/componente-ng-content.component';
import { OnChangesComponent } from './life-cycle-hooks/on-changes.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';

@NgModule({
  declarations: [
    CadastroDetalheComponent,
    ComponenteNgContentComponent,
    OnChangesComponent,
    LifeCycleHooksComponent,
  ],
  imports: [
    CommonModule,
    FormsModule, //Template driven forms
    ReactiveFormsModule, //ReactiveForms
    CadastroRoutingModule,
  ],
  providers: [CadastroService],
})
export class CadastroModule {}
