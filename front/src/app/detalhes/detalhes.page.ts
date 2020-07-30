import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Republica } from '../republica';
import { RepublicService } from '../services/republic.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {
  republicaId = null;
  republica: Republica;
  estaCurtido = false;

  constructor(private activatedRoute: ActivatedRoute,
              public toastController: ToastController,
              public alertController: AlertController,
              public republicsService: RepublicService) { }

  ngOnInit() {
    this.republicaId = this.activatedRoute.snapshot.paramMap.get('id');
    this.republica = this.republicsService.getRepublica(this.republicaId);
  }

  handleChip(event: boolean) {
    if (event) {
      this.republica.likes++;
    } else {
      this.republica.likes--;
    }
    this.estaCurtido = event;

    this.toastCurtido();
  }

  async toastCurtido() {
    const toast = await this.toastController.create({
      message: this.estaCurtido ? 'Anúncio curtido!' : 'Anúncio descurtido!',
      duration: 1500,
    });

    toast.present();
  }

  async confirmarSalvo() {
    const alert = await this.alertController.create({
      subHeader: 'Deseja salvar esse anúncio?',
      buttons: ['Não', 'Sim']
    });

    await alert.present();
  }
}
