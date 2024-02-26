import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperLowerCase',
})
export class UpperLowerCasePipe implements PipeTransform {
  transform(value: string, upperCase: boolean = true): string {
    if (upperCase) return value.toUpperCase();
    else return value.toLowerCase();
  }
}
