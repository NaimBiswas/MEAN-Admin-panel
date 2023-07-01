import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translator'
})
export class TranslatorPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
