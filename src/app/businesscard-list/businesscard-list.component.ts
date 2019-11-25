import { Component, OnInit } from '@angular/core';
import { Card } from '../models/Card.model';

@Component({
  selector: 'app-businesscard-list',
  templateUrl: './businesscard-list.component.html',
  styleUrls: ['./businesscard-list.component.css']
})
export class BusinesscardListComponent implements OnInit {

  businessCardList: Card[];

  constructor() { }

  ngOnInit() {
  }

}
