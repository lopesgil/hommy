import { Component, OnInit } from '@angular/core';
import { Republica } from '../republica';
import { RepublicService } from '../services/republic.service';

@Component({
  selector: 'app-favoritas',
  templateUrl: './favoritas.page.html',
  styleUrls: ['./favoritas.page.scss'],
})
export class FavoritasPage implements OnInit {
  republicas: Republica[];

  constructor(public republicService: RepublicService) { }

  ngOnInit() {
    this.republicas = [
      this.republicService.getRepublica(2),
      this.republicService.getRepublica(1),
    ];
  }

}
