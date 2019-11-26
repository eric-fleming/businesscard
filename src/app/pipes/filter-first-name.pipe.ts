import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterFirstName'
})
export class FilterFirstNamePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
