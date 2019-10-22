import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  /**
   * Public only for testing purposes / hydrating the database
   */
  public books = [
    {
      name: 'Symfony',
      editor: 'Apress',
      description: 'The definitive guide to Symfony',
      picture: 'https://images-na.ssl-images-amazon.com/images/I/71zxPjfvZyL.jpg',
    }, {
      name: 'Star Wars Death Troopers',
      editor: 'Joe Schreiber',
      description: 'New York Times Bestseller',
      picture: 'https://images-na.ssl-images-amazon.com/images/I/519N8frZJzL._SX303_BO1,204,203,200_.jpg',
    }
  ];

  /**
   * Public only for testing purposes / hydrating the database
   */
  public cds = [
    {
      name: 'The Common Man\'s Collapse',
      artist: 'Veil Of Maya',
      picture: 'https://images-na.ssl-images-amazon.com/images/I/81EHgARqH8L._SL1425_.jpg',
    }, {
      name: 'Titan',
      artist: 'Anup Sastry',
      picture: 'https://f4.bcbits.com/img/a3172076385_10.jpg',
    },
  ];

  constructor(
    private storage: Storage
  ){
  }

  public setBooks(books) {
    this.storage.set('books', books);
  }

  public getBooks() {

    return this.storage.get('books');
  }

  public setCDs(cds) {
    this.storage.set('cds', this.cds);
  }

  public getCDs() {
    return this.storage.get('cds');
  }

  changeState(collection: string, item: any, state: boolean, borrower) {
    const index = this[collection].findIndex(loopItem => item.name === loopItem.name);
    this[collection][index].borrower = state === true ? borrower : null;
    this.storage.set(collection, this[collection]);
  }
}
