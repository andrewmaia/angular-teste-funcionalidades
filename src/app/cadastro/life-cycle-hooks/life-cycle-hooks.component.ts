import { Component, ViewChild } from '@angular/core';

import { OnChangesComponent } from './on-changes.component';

@Component({
  templateUrl: './life-cycle-hooks.component.html',
})
export class LifeCycleHooksComponent {
  propriedade = '';
  @ViewChild(OnChangesComponent) childView!: OnChangesComponent;

  constructor() {
    this.reset();
  }

  reset() {
    // setting power only triggers onChanges if this value is different
    this.propriedade = 'Algum valor';
    if (this.childView) {
      this.childView.reset();
    }
  }
}
