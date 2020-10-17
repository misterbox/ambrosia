import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-dropdown',
  templateUrl: './search-dropdown.component.html',
  styleUrls: ['./search-dropdown.component.scss']
})
export class SearchDropdownComponent implements OnInit {
  @Input() listItems: string[];
  @ViewChild('searchDropdownInput') dropdownElement: ElementRef;

  readonly testCategories = [
    'Produce',
    'Bread/Pasta',
    'Processed Foods',
    'Spices/Baking',
    'Oils',
    'Milk'
  ];
  public isDropdownOpen: boolean;

  private listFilter = '';

  constructor() { }

  ngOnInit(): void {
  }

  public get sortedListItems(): string[] {
    const items = this.listItems ? this.listItems : this.testCategories;
    return items.filter(this.filterItemList, this).sort();
  }

  public toggleList(): void {
    this.isDropdownOpen ? this.closeList() : this.openList();
  }

  public onFilterKeyUp(event: any): void {
    this.listFilter = event.target.value;
  }

  private openList(): void {
    console.log('opening');
    this.isDropdownOpen = true;
  }

  private closeList(): void {
    console.log('closing');
    this.isDropdownOpen = false;
  }

  private filterItemList(item: string): boolean {
    return this.listFilter.length > 0 ? item.toUpperCase().includes(this.listFilter.toUpperCase()) : true;
  }
}
