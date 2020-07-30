import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chip-likes',
  templateUrl: './chip-likes.component.html',
  styleUrls: ['./chip-likes.component.scss'],
})
export class ChipLikesComponent implements OnInit {
  estaCurtido: boolean;

  @Input() likes: number;
  @Output() chipClicado = new EventEmitter<boolean>();

  constructor() { }


  ngOnInit() {
    this.estaCurtido = false;
  }

  clicouChip() {
    this.estaCurtido = !this.estaCurtido;
    this.chipClicado.emit(this.estaCurtido);
  }
}
