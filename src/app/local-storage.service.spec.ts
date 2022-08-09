import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should remove item from list', () => {
    service.listItems = [{item: 'Apple'}, {item: 'Orange'}];
    service.removeListItem(0);
    expect(service.listItems).toEqual([{item: 'Orange'}]);
  });

  it('should add item to list', () => {
    service.listItems = [{item: 'Apple'}, {item: 'Orange'}];
    service.addListItem('Banana');
    expect(service.listItems[0]).toEqual({item: 'Banana'});
  });
});
