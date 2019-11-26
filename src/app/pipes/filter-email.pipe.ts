import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filteremail'
})
export class FilterEmailPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
