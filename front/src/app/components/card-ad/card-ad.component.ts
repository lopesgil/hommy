import { Component, OnInit, Input } from '@angular/core';
import { Republica } from '../../republica';
import { Router } from '@angular/router';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-card-ad',
  templateUrl: './card-ad.component.html',
  styleUrls: ['./card-ad.component.scss'],
})
export class CardAdComponent implements OnInit {
  @Input() republica: Republica;

  constructor(public searchService: SearchService,
              public router: Router) { }

  ngOnInit() {}

  public irParaRepublica(idRepublic: number) {
    this.searchService.getRepublic(idRepublic + 1).subscribe( (res) => {
      const republic = JSON.stringify(res);
      localStorage.setItem('republic', republic);
      this.router.navigate(['detalhes/', this.republica.id]);
    });
  }
}
