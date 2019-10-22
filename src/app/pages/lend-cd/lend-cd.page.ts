import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import { DataService } from '../../services/data.service';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-lend-cd',
  templateUrl: './lend-cd.page.html',
  styleUrls: ['./lend-cd.page.scss'],
})
export class LendCdPage implements OnInit {
  private cd;
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
    this.cd = this.navParams.get('cd');
  }

  public action(state) {
    this.dataService.changeState(
      'cds',
      this.cd,
      state,
      state === true ? this.form.get('borrower').value : null
    );

    this.modalCtrl.dismiss();
  }
}
