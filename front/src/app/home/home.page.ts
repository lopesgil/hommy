import { Component, OnInit } from '@angular/core';
import { Republica } from '../republica';
import { SearchService } from '../services/search.service';
import { RepublicService } from '../services/republic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {
  republicas: Republica[];

  constructor(public searchService: SearchService,
              public republicsService: RepublicService,
              ) { }

  ngOnInit() {
    this.allRepublicsGet();
  }

  allRepublicsGet() {
    this.searchService.getRepublics().subscribe((res) => {
      this.republicsService.setRepublicasArray(res);
      this.republicas = this.republicsService.getRepublicasArray();
    });
  }
}
