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

  chipCurtir() {
    this.curtirAlt();
    this.toastCurtido();
  }

  curtirAlt() {
    if (this.estaCurtido) {
      this.estaCurtido = false;
      this.republica.likes--;
    } else {
      this.estaCurtido = true;
      this.republica.likes++;
    }
  }

  async toastCurtido() {
    const toast = await this.toastController.create({
      message: this.estaCurtido ? 'Anúncio curtido!' : 'Anúncio descurtido!',
      duration: 3000,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.curtirAlt();
          },
        }
      ]
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
