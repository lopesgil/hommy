import { Component, OnInit, Input } from '@angular/core';
import { Republica } from '../../republica';

@Component({
  selector: 'app-card-ad',
  templateUrl: './card-ad.component.html',
  styleUrls: ['./card-ad.component.scss'],
})
export class CardAdComponent implements OnInit {
  @Input() republica: Republica;

  constructor() { }

  ngOnInit() {}

}
