import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-lend-cd',
  templateUrl: './lend-cd.page.html',
  styleUrls: ['./lend-cd.page.scss'],
})
export class LendCdPage implements OnInit {
  private cd;

  constructor(
      private navParams: NavParams,
      private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.cd = this.navParams.get('cd');
  }

  public action(bool) {
    this.cd.lent = bool;
    this.modalCtrl.dismiss();
  }
}
