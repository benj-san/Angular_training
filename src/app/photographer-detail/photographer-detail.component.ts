import { photographers } from './../photographer';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './photographer-detail.component.html',
  styleUrls: ['./photographer-detail.component.scss']
})
export class PhotographerDetailComponent implements OnInit {

  photographers;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.photographers = photographers[+params.get('photographerId')];
    });
  }

}
