import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterLastName'
})
export class FilterLastNamePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
