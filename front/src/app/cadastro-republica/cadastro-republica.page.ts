import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-cadastro-republica',
  templateUrl: './cadastro-republica.page.html',
  styleUrls: ['./cadastro-republica.page.scss'],
})
export class CadastroRepublicaPage implements OnInit {
  registerRepForm: FormGroup;
  photo: SafeResourceUrl;
  constructor(public formBuilder: FormBuilder,
              private sanitizer: DomSanitizer) {
    this.registerRepForm = this.formBuilder.group({
      address: [null, [Validators.required]],
      district: [null, [Validators.required]],
      city: [null, [Validators.required]],
      rooms: [null, [Validators.required]],
      beds: [null, [Validators.required]],
      vacancies: [null, [Validators.required]],
      price: [null, [Validators.required]],
      obs: [null],
      photo: [null],
    });
   }

  ngOnInit() {
  }

  async takePicture() {
    const image = await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: true,
      saveToGallery: true,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
    });

    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
  }

  submitForm(form) {
    console.log(form);
    console.log(form.value);
  }

}
