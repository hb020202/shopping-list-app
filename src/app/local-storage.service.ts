import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  localStorage: Storage;
  listItems: any[];

  constructor() {
    this.localStorage = window.localStorage;
    this.listItems = this.getLocalStorage();
  }

  addListItem(item: string): void {
    this.listItems.splice(0, 0, {item});
    this.setLocalStorage(this.listItems);
  }

  removeListItem(itemId): void {
    this.listItems.splice(itemId, 1);
    this.setLocalStorage(this.listItems);
  }

  setLocalStorage(list): void {
    this.localStorage.setItem('list', JSON.stringify(list));
  }

  getLocalStorage(): string[] {
    if (this.localStorage.length === 0) {
      return [];
    } else {
      return JSON.parse(this.localStorage.getItem('list'));
    }
  }
}
