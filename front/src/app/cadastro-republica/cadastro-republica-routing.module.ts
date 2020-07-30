import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroRepublicaPage } from './cadastro-republica.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroRepublicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroRepublicaPageRoutingModule {}
