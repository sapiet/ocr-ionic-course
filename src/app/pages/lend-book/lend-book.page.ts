import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {DataService} from '../../services/data.service';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-lend-book',
  templateUrl: './lend-book.page.html',
  styleUrls: ['./lend-book.page.scss'],
})
export class LendBookPage implements OnInit {
  private book;
  public form;

  constructor(
      private navParams: NavParams,
      private modalCtrl: ModalController,
      private formBuilder: FormBuilder,
      private dataService: DataService
  ) {
    this.form = this.formBuilder.group({
      borrower: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.book = this.navParams.get('book');
  }

  public action(state) {
    this.dataService.changeState(
      'books',
      this.book,
      state,
      state === true ? this.form.get('borrower').value : null
    );
    this.modalCtrl.dismiss();
  }
}
