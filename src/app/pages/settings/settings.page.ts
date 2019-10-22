import { Component } from '@angular/core';
import {DataService} from '../../services/data.service';
import {FirebaseService} from '../../services/firebase.service';
import {LoadingController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {
  constructor(
    private dataService: DataService,
    private firebaseService: FirebaseService,
    private toastController: ToastController,
    private loadingController: LoadingController
  ) {
  }

  async setCDs() {
    const loader = await this.loadingController.create();
    loader.present();

    this.firebaseService.setCDs(this.dataService.cds).then(
      async response => {
        loader.dismiss();
        const toast = await this.toastController.create({
          message: 'CDs update successfull !',
          duration: 2000
        });
        toast.present();
      },
      async error => {
        loader.dismiss();
        const toast = await this.toastController.create({
          message: 'An error occured: ' + error,
          duration: 2000
        });
        toast.present();
      }
    );
  }

  async getCDs() {
    const loader = await this.loadingController.create();
    loader.present();

    this.firebaseService.getCDs().then(
      async response => {
        this.dataService.setCDs(response);

        loader.dismiss();
        const toast = await this.toastController.create({
          message: `Retrieved and saved ${Object.keys(response).length} CDs`,
          duration: 2000
        });
        toast.present();
      },
      async error => {
        loader.dismiss();
        const toast = await this.toastController.create({
          message: 'An error occured: ' + error,
          duration: 2000
        });
        toast.present();
      }
    );
  }

  async setBooks() {
    const loader = await this.loadingController.create();
    loader.present();

    this.firebaseService.setBooks(this.dataService.books).then(
      async response => {
        loader.dismiss();
        const toast = await this.toastController.create({
          message: `Books update successfull !`,
          duration: 2000
        });
        toast.present();
      },
      async error => {
        loader.dismiss();
        const toast = await this.toastController.create({
          message: 'An error occured: ' + error,
          duration: 2000
        });
        toast.present();
      }
    );
  }

  async getBooks() {
    const loader = await this.loadingController.create();
    loader.present();

    this.firebaseService.getBooks().then(
      async response => {
        this.dataService.setBooks(response);

        loader.dismiss();
        const toast = await this.toastController.create({
          message: `Retrieved ${Object.keys(response).length} books`,
          duration: 2000
        });
        toast.present();
      },
      async error => {
        loader.dismiss();
        const toast = await this.toastController.create({
          message: 'An error occured: ' + error,
          duration: 2000
        });
        toast.present();
      }
    );
  }
}
