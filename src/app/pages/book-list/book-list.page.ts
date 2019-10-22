import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import {LoadingController, ModalController} from '@ionic/angular';
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
      private loadingController: LoadingController,
      private dataService: DataService
  ) {
  }

  async showDetails(book) {
    this.modalCtrl.create({component: LendBookPage, componentProps: {book}})
        .then(async modal => {
          modal.present();
          await modal.onWillDismiss();
          await this.load();
        });
  }

  async load() {
    const loader = await this.loadingController.create();
    await loader.present();

    this.dataService.getBooks().then(
      books => {
        loader.dismiss();
        this.books = books;
      },
      error => {
        loader.dismiss();
        alert(error);
      }
    );
  }

  async ionViewWillEnter() {
    await this.load();
  }
}
