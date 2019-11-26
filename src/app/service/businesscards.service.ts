import { Injectable } from '@angular/core';
import { Card } from '../models/Card.model';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class BusinesscardsService {

  database: Card[];
  fireDatabase: AngularFireList<Card>;
  fireDBPath = 'businessCardList';

  constructor(private fireDB: AngularFireDatabase) {
    this.fireDatabase = fireDB.list(this.fireDBPath);
    // perhaps add some statically to test
  }

  addTodo(cd: Card): void {
    this.fireDatabase.push(cd);
  }

  // Update Method

  getBusinessCards(): AngularFireList<Card> {
    return this.fireDatabase;
  }

  // Delete Method
}
