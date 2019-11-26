import { Pipe, PipeTransform } from '@angular/core';
import { Card } from '../models/Card.model';

@Pipe({
  name: 'filterFirstName',
  pure: false
})

export class FilterCompanyPipe implements PipeTransform {

  transform(input: Card[], company: string): Card[] {
    let results = [];
    for (const card of input) {
      if (card.company.toLowerCase() === company.toLowerCase()) {
        results.push(card);
      }
    }
    return results;
  }

}
