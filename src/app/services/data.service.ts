import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private books = [
    {
      name: 'Symfony',
      editor: 'Apress',
      description: 'The definitive guide to Symfony',
      picture: 'https://images-na.ssl-images-amazon.com/images/I/71zxPjfvZyL.jpg',
      borrower: null
    }, {
      name: 'Star Wars Death Troopers',
      editor: 'Joe Schreiber',
      description: 'New York Times Bestseller',
      picture: 'https://images-na.ssl-images-amazon.com/images/I/519N8frZJzL._SX303_BO1,204,203,200_.jpg',
      borrower: null
    }
  ];

  private cds = [
    {
      name: 'The Common Man\'s Collapse',
      artist: 'Veil Of Maya',
      picture: 'https://images-na.ssl-images-amazon.com/images/I/81EHgARqH8L._SL1425_.jpg',
      borrower: null
    }, {
      name: 'Titan',
      artist: 'Anup Sastry',
      picture: 'https://f4.bcbits.com/img/a3172076385_10.jpg',
      borrower: null
    },
  ];

  constructor(
    private storage: Storage
  ){
  }

  public getBooks() {
    /**
     * @todo: Trouver une solution d'initialisation
     */
    // this.storage.set('books', this.books);

    return this.storage.get('books');
  }

  public getCDs() {
    /**
     * @todo: Trouver une solution d'initialisation
     */
    // this.storage.set('cds', this.cds);

    return this.storage.get('cds');
  }

  changeState(collection: string, item: any, state: boolean, borrower) {
    const index = this[collection].findIndex(loopItem => item.name === loopItem.name);
    this[collection][index].borrower = state === true ? borrower : null;
    this.storage.set(collection, this[collection]);
  }
}
