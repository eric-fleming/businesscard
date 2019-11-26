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
  providers: [
    FilterFirstNamePipe,
    FilterLastNamePipe,
    FilterCompanyPipe,
    FilterEmailPipe,
    FilterPhonePipe
  ]
})
export class SearchComponent implements OnInit {

  businessCardList: Card[];
  searchResults: Card[];

  constructor(
    private service: BusinesscardsService,
    private fnPipe: FilterFirstNamePipe,
    private lnPipe: FilterLastNamePipe,
    private cPipe: FilterCompanyPipe,
    private ePipe: FilterEmailPipe,
    private pPipe: FilterPhonePipe) { }

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

  private filterFunction(target: Card[], inputArray: string[]): Card[] {
    let filteredCards = target;
    // filter data based on what the user typed in
    // tslint:disable-next-line:prefer-for-of

    for (let i = 0; i < inputArray.length; i++) {
      if (!!inputArray[i]) {
        if (i === 0) {
          console.log('Filtering by : first name');
          filteredCards = this.fnPipe.transform(filteredCards, inputArray[i]);
        } else if (i === 1) {
          console.log('Filtering by : last name');
          filteredCards = this.lnPipe.transform(filteredCards, inputArray[i]);
        } else if (i === 2) {
          console.log('Filtering by : company');
          filteredCards = this.cPipe.transform(filteredCards, inputArray[i]);
        } else if (i === 3) {
          console.log('Filtering by : email');
          filteredCards = this.ePipe.transform(filteredCards, inputArray[i]);
        } else if (i === 4) {
          console.log('Filtering by : phone');
          filteredCards = this.pPipe.transform(filteredCards, inputArray[i]);
        }
      }
    }
    return filteredCards;
  }

  search(
    firstname: HTMLInputElement, lastname: HTMLInputElement,
    company: HTMLInputElement, email: HTMLInputElement, phone: HTMLInputElement): void {

    let inputArray = [firstname.value, lastname.value, company.value, email.value, phone.value];

    // Testing the fields
    inputArray = inputArray.map( e => e.toLowerCase());
    console.table(inputArray);

    // Get information from database
    this.getBusinessCards();
    const allCards = this.businessCardList;

    // call the grand filtering function
    const filteredCards = this.filterFunction(allCards, inputArray);

    // clear previous search results
    if (filteredCards.length === 0) {
      this.searchResults = [];
    }
    // set the result to be rendered
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
    // clear previous search results
    this.searchResults = [];
  }

}
