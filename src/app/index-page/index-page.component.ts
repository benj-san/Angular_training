import { photographers } from './../photographer';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss']
})
export class IndexPageComponent implements OnInit {
  photographers = photographers;

  constructor() { }

  ngOnInit(): void {
  }

}
