import { Pipe, PipeTransform } from '@angular/core';
import { Card } from '../models/Card.model';

@Pipe({
  name: 'filterFirstName',
  pure: false
})

export class FilterEmailPipe implements PipeTransform {

  transform(input: Card[], email: string): Card[] {
    let results = [];
    for (const card of input) {
      if (card.email.toLowerCase() === email.toLowerCase()) {
        results.push(card);
      }
    }
    return results;
  }

}
