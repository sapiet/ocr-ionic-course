import { Component } from '@angular/core';
import {DataService} from '../../services/data.service';
import {LoadingController, ModalController} from '@ionic/angular';
import {LendCdPage} from '../lend-cd/lend-cd.page';

@Component({
  selector: 'app-cd-list',
  templateUrl: './cd-list.page.html',
  styleUrls: ['./cd-list.page.scss'],
})
export class CdListPage {
  public cds: any[];

  constructor(
      private modalCtrl: ModalController,
      private loadingController: LoadingController,
      private dataService: DataService
  ) {
  }

  showDetails(cd: any) {
    this.modalCtrl.create({component: LendCdPage, componentProps: {cd}})
        .then(async modal => {
          modal.present();
          await modal.onWillDismiss();
          await this.load();
        });
  }

  async load() {
    const loader = await this.loadingController.create();
    await loader.present();

    this.dataService.getCDs().then(
      books => {
        loader.dismiss();
        this.cds = books;
      },
      error => {
        loader.dismiss();
        alert(error);
      }
    );
  }

  async ionViewWillEnter() {
    this.load();
  }
}
