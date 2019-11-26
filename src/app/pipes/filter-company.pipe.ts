import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCompany'
})
export class FilterCompanyPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
