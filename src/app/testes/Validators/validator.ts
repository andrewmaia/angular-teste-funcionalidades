import { AbstractControl, ValidatorFn } from '@angular/forms';

export function requiredTextValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden = (control.value || '').trim() != '';
    return forbidden ? null : { 'Valor inválido': { value: control.value } };
  };
}
