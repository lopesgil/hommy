import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoritasPageRoutingModule } from './favoritas-routing.module';

import { FavoritasPage } from './favoritas.page';

import { CardAdComponent } from '../components/card-ad/card-ad.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritasPageRoutingModule
  ],
  declarations: [FavoritasPage, CardAdComponent]
})
export class FavoritasPageModule {}
