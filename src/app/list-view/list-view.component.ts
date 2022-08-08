import { Component, OnInit } from '@angular/core';
import { ListDataService } from '../list-data.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  listItems: any[] = [];

  constructor(
    private listDataService: ListDataService
  ) { }

  ngOnInit(): void {
    this.listItems = this.listDataService.getListItems();
  }

  removeItem(itemId: number): void {
    this.listItems.splice(itemId, 1);
  }

  strikethroughItem(itemId: number): void {
    document.getElementById(String(itemId))?.setAttribute('class', 'strikethrough');
  }
}
