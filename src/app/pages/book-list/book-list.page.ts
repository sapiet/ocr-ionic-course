import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import {ModalController} from '@ionic/angular';
import {LendBookPage} from '../lend-book/lend-book.page';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.page.html',
  styleUrls: ['./book-list.page.scss'],
})
export class BookListPage {
  public books;

  constructor(
      private modalCtrl: ModalController,
      private dataService: DataService
  ) {
  }

  async showDetails(book) {
    this.modalCtrl.create({component: LendBookPage, componentProps: {book}})
        .then(modal => modal.present());
  }

  ionViewWillEnter() {
    this.books = this.dataService.books;
  }
}
