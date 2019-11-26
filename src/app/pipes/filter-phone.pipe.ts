import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPhone'
})
export class FilterPhonePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
