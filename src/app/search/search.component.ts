import { Component, OnInit } from '@angular/core';
import { Card } from '../models/Card.model';
import { BusinesscardsService } from '../service/businesscards.service';
import { map } from 'rxjs/operators';
import { from } from 'rxjs/internal/observable/from';
import { Observable } from 'rxjs';

// My Pipes for searches
import { FilterFirstNamePipe } from '../pipes/filter-first-name.pipe';
import { FilterLastNamePipe } from '../pipes/filter-last-name.pipe';
import { FilterCompanyPipe } from '../pipes/filter-company.pipe';
import { FilterEmailPipe } from '../pipes/filter-email.pipe';
import { FilterPhonePipe } from '../pipes/filter-phone.pipe';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [FilterFirstNamePipe]
})
export class SearchComponent implements OnInit {

  businessCardList: Card[];
  searchResults: Card[];

  constructor(private service: BusinesscardsService, private fnPipe: FilterFirstNamePipe) { }

  ngOnInit() {
    this.getBusinessCards();
  }

  getBusinessCards() {
    this.service.getBusinessCards().snapshotChanges()
      .pipe(
        map(data => data.map(d => ({
          key: d.payload.key, ...d.payload.val()
        })))
      ).subscribe(cards => {
        this.businessCardList = cards;
      });
  }

  search(
    firstname: HTMLInputElement, lastname: HTMLInputElement,
    company: HTMLInputElement, email: HTMLInputElement, phone: HTMLInputElement): void {

    let inputArray = [firstname.value, lastname.value, company.value, email.value, phone.value];

    // Testing the fields
    inputArray = inputArray.map( e => e.toLowerCase());
    console.table(inputArray);

    this.getBusinessCards();
    const allCards = this.businessCardList;
    let filteredCards = [];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < inputArray.length; i++) {
      if (!!inputArray[i] && i === 0) {
        console.log('Filtering by : first name');
        filteredCards = this.fnPipe.transform(allCards, inputArray[i]);
      }
    }
    this.searchResults = filteredCards;
  }

  clear(
    firstname: HTMLInputElement, lastname: HTMLInputElement,
    company: HTMLInputElement, email: HTMLInputElement, phone: HTMLInputElement): void {
    // clear text fields
    firstname.value = '';
    lastname.value = '';
    company.value = '';
    email.value = '';
    phone.value = '';
  }

}
