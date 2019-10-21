import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {ModalController} from '@ionic/angular';
import {LendCdPage} from '../lend-cd/lend-cd.page';

@Component({
  selector: 'app-cd-list',
  templateUrl: './cd-list.page.html',
  styleUrls: ['./cd-list.page.scss'],
})
export class CdListPage implements OnInit {
  public cds: any[];

  constructor(
      private modalCtrl: ModalController,
      private dataService: DataService
  ) {
  }

  ngOnInit() {
    this.cds = this.dataService.cds;
  }

  showDetails(cd: any) {
    this.modalCtrl.create({component: LendCdPage, componentProps: {cd}})
        .then(modal => modal.present());
  }
}
