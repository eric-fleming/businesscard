import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../models/Card.model';
import { BusinesscardsService } from '../service/businesscards.service';
import { Router } from '@angular/router';
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

  constructor(private businesscardsService: BusinesscardsService, private router: Router) { }

  ngOnInit() {
  }

  getImageURL(): string {
    return 'assets/images/blankprofilepic.webp';
  }

  deleteMyself() {
    console.log('trying to delete');
    this.businesscardsService.deleteCard(this.cardInfo.id)
      .catch(err => console.log(err));
  }
  // add on Destroy method later

}
