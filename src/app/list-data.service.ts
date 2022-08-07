import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListDataService {

  listItems: any[] = [
    {item: 'Apples'}
  ];

  constructor() { }

  getListItems(): string[] {
    return this.listItems;
  }

  addListItem(item: string): void {
    this.listItems.splice(0, 0, {item});
  }
}
