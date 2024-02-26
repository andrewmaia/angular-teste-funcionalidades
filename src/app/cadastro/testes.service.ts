import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  qtdChamadas: number;

  constructor(private http: HttpClient) {
    this.qtdChamadas = 0;
  }

  executar(): Observable<any[]> {
    return this.http.get<any[]>(
      'https://e4m178m4r5.execute-api.us-east-1.amazonaws.com/Prod/planos'
    );
  }

  validarServiceSingleton() {
    alert(++this.qtdChamadas);
  }
}
