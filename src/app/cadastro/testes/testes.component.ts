import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CadastroService } from '../testes.service';
import { Observable } from 'rxjs';
import { requiredTextValidator } from '../Validators/validator';

@Component({
  selector: 'app-testes',
  templateUrl: './testes.component.html',
})
export class TestesComponent implements OnInit, AfterViewInit {
  form = new FormGroup({
    nome: new FormControl('', requiredTextValidator()),
  });
  registros$: Observable<any[]>;
  model: any;
  variavelInterpolada: string;
  variavelParaPropertyBinding: string;
  variavelTwoWayBinding: string;
  variavelDateParaPipe: Date;
  variavelDateParaCustomPipe: string;
  time: Observable<string>;
  @ViewChild('templateVaraiableParaViewChild')
  input: ElementRef;

  constructor(private cadastroService: CadastroService) {
    this.registros$ = new Observable<any[]>();
    this.model = { nome: '' };
    this.variavelInterpolada = 'texto exibido por interpolação';
    this.variavelParaPropertyBinding = 'texto exibido por Property Binding';
    this.variavelDateParaPipe = new Date(1999, 1, 1);
    this.variavelDateParaCustomPipe = 'TEXTO ERA UPPER CASE';
    this.time = new Observable((observer) => {
      setInterval(() => {
        observer.next(new Date().toString());
      }, 2000);
    });
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

  validarServiceSingleton() {
    this.cadastroService.validarServiceSingleton();
  }

  dispararEventBinding(msg: string) {
    alert(msg);
  }
  LimparTwoWayBinding() {
    this.variavelTwoWayBinding = '';
  }
}
