import { Injectable } from '@angular/core';
import { Card } from '../models/Card.model';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BusinesscardsService {

  // realtime database stuff
  fireDBPath = 'businessCardList';
  realtimeDatabaseRef: AngularFireList<Card>;
  items: Observable<any>;

  // firestore database stuff
  private afsDBPath = 'businesscards';
  firestoreCards: Observable<Card[]>;
  firestoreCardsCollection: AngularFirestoreCollection<Card>;

  constructor(private fireDB: AngularFireDatabase, private afs: AngularFirestore) {
    // realtime database
    this.realtimeDatabaseRef = fireDB.list(this.fireDBPath);
    this.items = this.realtimeDatabaseRef.snapshotChanges();

    // firestore database
    this.firestoreCardsCollection = afs.collection<Card>(this.afsDBPath);
    this.firestoreCards = this.firestoreCardsCollection.valueChanges();
  }



  /* --------- REALTIME DATABASE METHODS ---------*/
  addCard(cd: Card): void {
    const myid = this.afs.createId();
    cd.id = myid;
    console.table(cd);
    this.realtimeDatabaseRef.push(cd);
  }

  // Update Method
  updateCard(cardID: string, value: any): Promise<void> {
    return this.realtimeDatabaseRef.update(cardID, value);
  }

  // Delete Method
  deleteCard(cardID: string): Promise<void> {
     return this.realtimeDatabaseRef.remove(cardID);
  }

  // Delete All
  deleteAll(): Promise<void> {
    return this.realtimeDatabaseRef.remove();
  }

  // get all cards
  getBusinessCards(): AngularFireList<Card> {
    return this.realtimeDatabaseRef;
  }

/* --------- END OF REALTIME DATABASE METHODS---------*/
}
