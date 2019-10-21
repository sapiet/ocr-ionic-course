import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public books = [
    {
      name: 'Symfony',
      editor: 'Apress',
      description: 'The definitive guide to Symfony',
      picture: 'https://images-na.ssl-images-amazon.com/images/I/71zxPjfvZyL.jpg',
      lent: false
    }, {
      name: 'Star Wars Death Troopers',
      editor: 'Joe Schreiber',
      description: 'New York Times Bestseller',
      picture: 'https://images-na.ssl-images-amazon.com/images/I/519N8frZJzL._SX303_BO1,204,203,200_.jpg',
      lent: true
    }
  ];

  public cds = [
    {
      name: 'The Common Man\'s Collapse',
      artist: 'Veil Of Maya',
      picture: 'https://images-na.ssl-images-amazon.com/images/I/81EHgARqH8L._SL1425_.jpg',
      lent: false
    }, {
      name: 'Titan',
      artist: 'Anup Sastry',
      picture: 'https://f4.bcbits.com/img/a3172076385_10.jpg',
      lent: false
    },
  ]
}
