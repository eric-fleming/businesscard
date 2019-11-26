import { Component, OnInit } from '@angular/core';
import { Card } from '../models/Card.model';
import { BusinesscardsService } from '../service/businesscards.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  cardID: string;
  myOldCard: Card;

  constructor(private service: BusinesscardsService, private actRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // get the card infomation and print it to the view
    this.cardID = this.actRoute.snapshot.paramMap.get('id');
    console.log(`I grabbed the id : ${this.cardID}`);
    const firstname = this.actRoute.snapshot.paramMap.get('firstname');
    const lastname = this.actRoute.snapshot.paramMap.get('lastname');
    const company = this.actRoute.snapshot.paramMap.get('company');
    const email = this.actRoute.snapshot.paramMap.get('email');
    const phone = this.actRoute.snapshot.paramMap.get('phone');
    this.myOldCard = new Card(firstname, lastname, company, email, phone);
    this.myOldCard.id = this.cardID;

  }

  update(
    firstname: HTMLInputElement, lastname: HTMLInputElement,
    company: HTMLInputElement, email: HTMLInputElement, phone: HTMLInputElement): void {
    // need to pas information to the sevice
    // grab id from route params
    const freshCard = new Card(firstname.value, lastname.value, company.value, email.value, phone.value);
    freshCard.id = this.cardID;

    console.log('New Card');
    console.table(freshCard);
    // Make new record
    this.service.updateCard(this.cardID, freshCard);
    this.router.navigate(['/listofcards']);
  }

  deleteMyself(): void {
    console.log('Attempting to delete');
    this.service.deleteCard(this.cardID);
    this.router.navigate(['/listofcards']);
  }
}
