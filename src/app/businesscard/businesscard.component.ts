import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Card } from '../models/Card.model';
import { BusinesscardsService } from '../service/businesscards.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-businesscard',
  templateUrl: './businesscard.component.html',
  styleUrls: ['./businesscard.component.css']
})
export class BusinesscardComponent implements OnInit, OnDestroy {


  @Input() cardInfo: Card;
  @Input() i: any;

  constructor(private businesscardsService: BusinesscardsService) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  getImageURL(): string {
    return this.cardInfo.imageURL;
  }

}
