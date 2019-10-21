import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-lend-book',
  templateUrl: './lend-book.page.html',
  styleUrls: ['./lend-book.page.scss'],
})
export class LendBookPage implements OnInit {
  private book;

  constructor(
      private navParams: NavParams,
      private modalCtrl: ModalController,
      private dataService: DataService
  ) { }

  ngOnInit() {
    this.book = this.navParams.get('book');
  }

  public action(bool) {
    this.book.lent = bool;
    this.modalCtrl.dismiss();
  }
}
