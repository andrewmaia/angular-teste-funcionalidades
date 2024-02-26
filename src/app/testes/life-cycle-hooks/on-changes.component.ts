import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'on-changes',
  templateUrl: './on-changes.component.html',
})
export class OnChangesComponent implements OnChanges {
  @Input() propriedade = '';

  logs: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      const prop = changes[propName];
      const cur = JSON.stringify(prop.currentValue);
      const prev = JSON.stringify(prop.previousValue);
      this.logs.push(
        `${propName}: valorAtual = ${cur}, valorAnterior = ${prev}`
      );
    }
  }

  reset() {
    this.logs = [];
  }
}
