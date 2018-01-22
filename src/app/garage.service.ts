import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Garage } from '../models/Garage';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GarageService {
  garageCollection: AngularFirestoreCollection<Garage>;
  garages: Observable<Garage[]>;
  garageDoc: AngularFirestoreDocument<Garage>;

  constructor(public afs: AngularFirestore) {
    this.garageCollection = this.afs.collection('garage', ref => ref.orderBy('name', 'asc'));

    this.garages = this.garageCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Garage;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  addGarage(garage: Garage) {
    this.garageCollection.add(garage);
  }

  getGarage() {
    return this.garages;
  }

}
