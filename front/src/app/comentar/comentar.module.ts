import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComentarPageRoutingModule } from './comentar-routing.module';

import { ComentarPage } from './comentar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComentarPageRoutingModule
  ],
  declarations: [ComentarPage]
})
export class ComentarPageModule {}
