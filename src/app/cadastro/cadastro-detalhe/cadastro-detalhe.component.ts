import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CadastroService } from '../cadastro.service';
import { Observable } from 'rxjs';
import { requiredTextValidator } from '../../validator';

@Component({
  selector: 'app-cadastro-detalhe',
  templateUrl: './cadastro-detalhe.component.html',
  styleUrls: ['./cadastro-detalhe.component.css'],
})
export class CadastroDetalheComponent implements OnInit, AfterViewInit {
  form = new FormGroup({
    nome: new FormControl('', requiredTextValidator()),
  });
  registros$: Observable<any[]>;
  model: any;
  variavelInterpolada: string;
  @ViewChild('templateVaraiableParaViewChild')
  input: ElementRef;

  constructor(private cadastroService: CadastroService) {
    this.registros$ = new Observable<any[]>();
    this.model = { nome: '' };
    this.variavelInterpolada = 'texto exibido por interpolação';
  }

  ngOnInit() {
    //console.log(this.input.value);
  }

  carregar() {
    this.registros$ = this.cadastroService.executar();
  }

  //Depende do módulo ReactiveFormsModule
  onSubmitReactiveForms({ value }: any) {
    alert(value.nome);
  }

  //Depende do módulo FormsModule
  onSubmitTempleteDrive() {
    alert(this.model.nome);
  }

  exibir(v: string) {
    alert(v);
  }

  ngAfterViewInit() {
    console.log(this.input.nativeElement.value);
  }
}
