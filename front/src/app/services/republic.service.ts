import { Injectable } from '@angular/core';
import { Republica } from '../republica';

@Injectable({
  providedIn: 'root'
})
export class RepublicService{
  public republicas: Republica[];

  constructor() { }

  setRepublicasArray(res: any) {
    // péssima ideia, apenas para não quebrar o layout provisoriamente
    this.republicas = [
      {
        id: 0,
        img: '../../assets/img/republica1.jpg',
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
        quartos: 5,
        camas: 9,
        vagas: 3,
        preco: 450,
        likes: 115,
        descricao: '5 quartos, 4 beliches, confortável, acessível, localizado proximo a estação de trem, ambiente comum aconchegante.',
      },
    ];

    let i = 0;
    for (const r of this.republicas) {
      r.endereco = res[i].address;
      r.bairro = res[i].district;
      r.cidade = res[i].city;
      i++;
    }
  }

  getRepublicasArray() {
    return this.republicas;
  }
  getRepublica(id: number) {
    return this.republicas[id];
  }
}
