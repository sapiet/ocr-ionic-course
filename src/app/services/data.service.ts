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
}
