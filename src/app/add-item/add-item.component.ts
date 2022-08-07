import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ListDataService } from '../list-data.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor(
    private listDataService: ListDataService
  ) { }

  ngOnInit(): void {
  }

  addItem(item: NgModel): void {
    this.listDataService.addListItem(item.value);
  }
}
