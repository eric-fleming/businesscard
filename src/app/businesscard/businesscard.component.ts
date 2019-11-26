import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../models/Card.model';
import { BusinesscardsService } from '../service/businesscards.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-businesscard',
  templateUrl: './businesscard.component.html',
  styleUrls: ['./businesscard.component.css']
})
export class BusinesscardComponent implements OnInit {
// add on destroy to imports and to implements

  @Input() cardInfo: Card;
  @Input() i: any;

  constructor(private businesscardsService: BusinesscardsService) { }

  ngOnInit() {
  }
  getImageURL(): string {
    return 'assets/images/blankprofilepic.webp';
  }
  // add on Destroy method later

}
