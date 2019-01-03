import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class SearchListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() data:String[];
}
