import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  public transform(value: string): string {
    const reversed: string = Array.from(value).reverse().join('');
    return reversed;
  }
}
