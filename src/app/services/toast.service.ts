
import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastController: ToastController) { }
  async presentToast(infoMessage:string) {
    const toast = await this.toastController.create({
      message: infoMessage,
      duration: 1500,
      position: 'bottom'
    });

    await toast.present();
}
}
