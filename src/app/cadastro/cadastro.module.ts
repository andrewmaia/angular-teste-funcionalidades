import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CadastroDetalheComponent } from './cadastro-detalhe/cadastro-detalhe.component';
import { CadastroRoutingModule } from './cadastro-routing.module';

@NgModule({
  declarations: [CadastroDetalheComponent],
  imports: [
    CommonModule,
    FormsModule, //Template driven forms
    ReactiveFormsModule, //ReactiveForms
    CadastroRoutingModule,
  ],
})
export class CadastroModule {}
