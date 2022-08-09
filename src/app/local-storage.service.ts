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

  setLocalStorage(list): void {
    this.localStorage.setItem('list', JSON.stringify(list));
  }

  getLocalStorage(): string[] {
    return JSON.parse(this.localStorage.getItem('list'));
  }
}
