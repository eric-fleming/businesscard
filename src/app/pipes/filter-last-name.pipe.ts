import { Pipe, PipeTransform } from '@angular/core';
import { Card } from '../models/Card.model';


@Pipe({
  name: 'filterLastName',
  pure: false
})

export class FilterLastNamePipe implements PipeTransform {

  transform(input: Card[], lastName: string): Card[] {
    let results = [];
    for (const card of input) {
      if (card.lastname.toLowerCase() === lastName.toLowerCase()) {
        results.push(card);
      }
    }
    return results;
  }

}
