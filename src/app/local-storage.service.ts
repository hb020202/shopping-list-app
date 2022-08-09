import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  localStorage;
  listItems: any[] = [];

  constructor() {
    this.localStorage = window.localStorage;
  }

  addListItem(item: string): void {
    this.listItems.splice(0, 0, {item});
    this.setLocalStorage(this.listItems);
    this.getLocalStorage();
  }

  setLocalStorage(list): void {
    this.localStorage = JSON.stringify(list);
  }

  getLocalStorage(): string[] {
    return this.localStorage.listItems;
  }
}
