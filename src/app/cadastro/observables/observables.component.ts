import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  templateUrl: './observables.component.html',
})
export class ObservablesComponent implements OnInit {
  logs: string[] = [];
  ngOnInit(): void {
    const source = new Observable<number>((observer) => {
      try {
        observer.next(1);
        observer.next(2);
        observer.complete();
      } catch (ex) {
        observer.error(ex);
      }
    });

    const observer1: Observer<number> = {
      next: (x: number) => this.logs.push('observer1 recebeu o valor: ' + x),
      error: (e: string) => this.logs.push('observer1 recebeu o erro: ' + e),
      complete: () =>
        this.logs.push('observer1 recebeu notificação de complete'),
    };

    const observer2: Observer<number> = {
      next: (x: number) => this.logs.push('observer2 recebeu o valor: ' + x),
      error: (e: string) => this.logs.push('observer2 recebeu o erro: ' + e),
      complete: () =>
        this.logs.push('observer2 recebeu notificação de complete'),
    };

    source.subscribe(observer1);
    source.subscribe(observer2);
  }
}
