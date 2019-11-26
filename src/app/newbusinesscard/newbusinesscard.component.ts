import { Component, OnInit } from '@angular/core';
import { Card } from '../models/Card.model';
import { BusinesscardsService } from '../service/businesscards.service';



@Component({
  selector: 'app-newbusinesscard',
  templateUrl: './newbusinesscard.component.html',
  styleUrls: ['./newbusinesscard.component.css']
})
export class NewBusinesscardComponent implements OnInit {

  constructor(private service: BusinesscardsService) { }

  ngOnInit() {
  }

  submit(
    firstname: HTMLInputElement, lastname: HTMLInputElement,
    company: HTMLInputElement, email: HTMLInputElement, phone: HTMLInputElement): void {

    const freshCard = new Card(firstname.value, lastname.value, company.value, email.value, phone.value);
    console.table(freshCard);
    this.service.addCard(freshCard);
    // clear text fields
    firstname.value = '';
    lastname.value = '';
    company.value = '';
    email.value = '';
    phone.value = '';
  }

}
