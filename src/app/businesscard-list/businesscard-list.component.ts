import { Component, OnInit } from '@angular/core';
import { Card } from '../models/Card.model';
import { BusinesscardsService } from '../service/businesscards.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-businesscard-list',
  templateUrl: './businesscard-list.component.html',
  styleUrls: ['./businesscard-list.component.css']
})
export class BusinesscardListComponent implements OnInit {

  businessCardList: Card[];

  constructor(private service: BusinesscardsService) { }

  ngOnInit() {
    this.getBusinessCards();
    console.table(this.businessCardList);
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

  deleteAll() {
    this.service.deleteAll();
  }

}
