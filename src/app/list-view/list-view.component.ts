import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  listItems: any[];

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.getListItems();
  }

  getListItems(): void {
    this.listItems = this.localStorageService.listItems;
  }

  removeItem(itemId: number): void {
    this.listItems.splice(itemId, 1);
  }

  strikethroughItem(itemId: number): void {
    document.getElementById(String(itemId))?.setAttribute('class', 'strikethrough');
  }
}
