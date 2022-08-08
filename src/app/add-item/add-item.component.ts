import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ListDataService } from '../list-data.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  mode: string;

  constructor(
    private listDataService: ListDataService
  ) { }

  ngOnInit(): void {
    this.mode = '';
  }

  addItem(item: NgModel): void {
    if (!item.value) {
      return;
    }
    this.setMode('');
    const cleanItem = this.cleanItem(item.value);
    this.listDataService.addListItem(cleanItem);
  }

  cleanItem(item): string | undefined {
    const regex = /[^\w\s]/gi;
    const cleanItem = item.replace(regex, '');
    return cleanItem;
  }

  setMode(mode: string): void {
    this.mode = mode;
  }
}
