import { Pipe, PipeTransform } from '@angular/core';
import { Card } from '../models/Card.model';

@Pipe({
  name: 'filterFirstName',
  pure: false
})

export class FilterPhonePipe implements PipeTransform {

  transform(input: Card[], phone: string): Card[] {
    let results = [];
    for (const card of input) {
      if (card.phone.toLowerCase() === phone.toLowerCase()) {
        results.push(card);
      }
    }
    return results;
  }

}
