import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListDataService {

  listItems: any[] = [
    {item: 'Apples'}
  ];

  constructor() { }

  getListItems() {
    return this.listItems;
  }
}
