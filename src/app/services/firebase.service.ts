import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private booksRef = 'books';
  private cdsRef = 'cds';

  public getBooks() {
    return this.get(this.booksRef);
  }

  public setBooks(books) {
    return this.set(this.booksRef, books);
  }

  public getCDs() {
    return this.get(this.cdsRef);
  }

  public setCDs(cds) {
    return this.set(this.cdsRef, cds);
  }

  private set(ref, data) {
    return new Promise((resolve, reject) => {
      firebase.database().ref(ref).set(data).then(
        (result: DataSnapshot) => resolve(result),
        error => reject(error)
      );
    });
  }

  private get(ref) {
    return new Promise((resolve, reject) => {
      firebase.database().ref(ref).once('value').then(
        (data: DataSnapshot) => resolve(data.val()),
        (error) => reject(error)
      );
    });
  }
}
