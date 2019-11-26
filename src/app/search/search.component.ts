import { Component, OnInit } from '@angular/core';
import { Card } from '../models/Card.model';
import { BusinesscardsService } from '../service/businesscards.service';
import { map } from 'rxjs/operators';
import { from } from 'rxjs/internal/observable/from';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  businessCardList: Card[];
  searchResults: Card[];

  constructor(private service: BusinesscardsService) { }

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
    console.table(inputArray);
    inputArray = inputArray.map( e => e.toLowerCase());
    console.table(inputArray);

    this.getBusinessCards();
    const allCardsStream = from(this.businessCardList);

    // I need to grab the results and filter the output.
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
