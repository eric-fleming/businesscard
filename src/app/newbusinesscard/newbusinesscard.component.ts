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
    text: HTMLInputElement,
    dueDate: HTMLInputElement): void {
      // add all the fields
    const freshCard = new Card();
    console.table(freshCard);
    this.service.addTodo(freshCard);
    // clear text fields
    text.value = '';
    dueDate.value = '';
  }

}
