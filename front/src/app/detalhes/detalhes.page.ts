import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Republica } from '../republica';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {
  republicaId = null;
  republicas: Republica[];
  republica: Republica;
  estaCurtido = false;

  constructor(private activatedRoute: ActivatedRoute,
    public toastController: ToastController,
    public alertController: AlertController) { }

  ngOnInit() {
    this.republicaId = this.activatedRoute.snapshot.paramMap.get('id');
    this.republicas = [
      {
        id: 0,
        img: '../../assets/img/republica1.jpg',
        endereco: 'Vila dos Sonhos Quebrados, nº 219',
        cidade: 'Cidade Maravilha',
        bairro: 'Vila das Flores',
        quartos: 4,
        camas: 24,
        vagas: 14,
        preco: 400,
        likes: 73,
        descricao: '4 quartos, 12 beliches, área de serviço ampla, salão de jogos, bem localizada próxima à estação de metro.',
      },
      {
        id: 1,
        img: '../../assets/img/republica2.jpg',
        endereco: 'Estrada dos Velhos Tijolos Amarelos, nº 234',
        cidade: 'São Miguel',
        bairro: 'Pedra Lascada',
        quartos: 10,
        camas: 20,
        vagas: 2,
        preco: 740,
        likes: 210,
        descricao: '10 quartos duplos, espaço amplo, inovador, instalações modernas, área comunitária perfeita tanto para lazer quanto estudos, excelente localização.'
      },
      {
        id: 2,
        img: '../../assets/img/republica3.jpg',
        endereco: 'Rua Pônei Doce, nº 510',
        cidade: 'Cidade Maravilha',
        bairro: 'Divino',
        quartos: 4,
        camas: 8,
        vagas: 4,
        preco: 385.5,
        likes: 99,
        descricao: '4 quartos, 4 beliches, ambiente acessível, confortável e seguro, bem localizado.',
      },
      {
        id: 3,
        img: '../../assets/img/republica4.jpg',
        endereco: 'Travessa Rubi, nº 232',
        cidade: 'Cidade Maravilha',
        bairro: 'Portelinha',
        quartos: 4,
        camas: 16,
        vagas: 4,
        preco: 410.3,
        likes: 122,
        descricao: 'Por outro lado, a competitividade nas transações comerciais deve passar por modificações independentemente das formas de ação.',
      },
      {
        id: 4,
        img: '../../assets/img/republica5.jpg',
        endereco: 'Baía Inglesa, nº 084',
        cidade: 'Santana de Bocaiúvas',
        bairro: 'Formigas',
        quartos: 5,
        camas: 9,
        vagas: 3,
        preco: 450,
        likes: 115,
        descricao: '5 quartos, 4 beliches, confortável, acessível, localizado proximo a estação de trem, ambiente comum aconchegante.',
      },
    ];
    this.republica = this.republicas[this.republicaId];
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
