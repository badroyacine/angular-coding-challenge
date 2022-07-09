import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty-results-card',
  templateUrl: './empty-results-card.component.html',
  styleUrls: ['./empty-results-card.component.scss']
})
export class EmptyResultsCardComponent implements OnInit {

  @Input() message: string = 'No results';

  constructor() { }

  ngOnInit(): void {
  }

}
