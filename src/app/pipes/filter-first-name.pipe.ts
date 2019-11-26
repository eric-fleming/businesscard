import { Pipe, PipeTransform } from '@angular/core';
import { Card } from '../models/Card.model';

@Pipe({
  name: 'filterFirstName',
  pure: false
})

export class FilterFirstNamePipe implements PipeTransform {

  transform(input: Card[], firstname: string): Card[] {
    let results = [];
    for (const card of input) {
      if (card.firstname.toLowerCase() === firstname.toLowerCase()) {
        results.push(card);
      }
    }
    return results;
  }

}
