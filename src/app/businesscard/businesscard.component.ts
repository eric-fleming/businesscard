import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../models/Card.model';

@Component({
  selector: 'app-businesscard',
  templateUrl: './businesscard.component.html',
  styleUrls: ['./businesscard.component.css']
})
export class BusinesscardComponent implements OnInit {

  @Input() cardInfo: Card;
  @Input() i: any;

  constructor() { }

  ngOnInit() {
  }

}
