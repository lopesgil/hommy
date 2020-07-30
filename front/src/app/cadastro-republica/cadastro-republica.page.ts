import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-republica',
  templateUrl: './cadastro-republica.page.html',
  styleUrls: ['./cadastro-republica.page.scss'],
})
export class CadastroRepublicaPage implements OnInit {
  registerRepForm: FormGroup;
  
  constructor(public formBuilder: FormBuilder) {
    this.registerRepForm = this.formBuilder.group({
      address: [null, [Validators.required]],
      district: [null, [Validators.required]],
      city: [null, [Validators.required]],
      rooms: [null, [Validators.required]],
      beds: [null, [Validators.required]],
      vacancies: [null, [Validators.required]],
      price: [null, [Validators.required]],
      obs: [null],
    });
   }

  ngOnInit() {
  }

  submitForm(form) {
    console.log(form);
    console.log(form.value);
  }

}
